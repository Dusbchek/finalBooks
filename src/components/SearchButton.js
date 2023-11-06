'use client';
import { useState, useEffect } from 'react';
import { Modal } from "flowbite-react";
import Link from 'next/link';

export default function SearcButton() {
    const apiKey = 'AIzaSyBX2JQeCcenjKoaqS1rQiZwXOiPzfk5QfA';
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const fetchData = async (query) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
            );

            if (!response.ok) {
                throw new Error('No se pudo obtener la información');
            }

            const data = await response.json();

            // Crear un nuevo arreglo de objetos con comprobaciones para datos opcionales
            const bookDataArray = data.items.map((book) => {
                const id = book.id || '';
                const name = book.volumeInfo?.title || 'Título no disponible';
                const image = book.volumeInfo?.imageLinks?.smallThumbnail || 'URL de imagen no disponible';
                const price = book.saleInfo?.listPrice?.amount || 0;
                const description = book.volumeInfo?.description || 'Descripción no disponible';

                return {
                    id,
                    name,
                    image,
                    price,
                    countInStock: 10,
                    rating: 4.5,
                    numReviews: 10,
                    description,
                };
            });

            return bookDataArray;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            const categories = ['Web', 'Networking', 'HTML', 'React',"Magic"];
            let allBooks = [];

            for (let category of categories) {
                const books = await fetchData(category);
                allBooks = [...allBooks, ...books];
            }

            setBookData(allBooks);
        };

        fetchAllData();
    }, []);

    const handleInputChange = (event) => {

        if (event.target.value != "") {
            setSearch(event.target.value);
            const results = bookData.filter(book =>
                book.name.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(results);
        }
        else {
            setSearchResults([]);
        }

    }
    return (
        <>
            <button
                type="text"
                className="w-full text-black/60 h-6 py-1 pl-8 pr-3 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 text-[10px] md:text-sm"
                onClick={() => {
                    setShow(true)
                    setSearchResults([])
                }}
            >
                Buscar...
            </button>
            <Modal show={show}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    {/* Header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShow(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Header */}

                    {/* Body */}
                    <div className="p-6 space-y-6">

                        <input type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Buscar..."
                            onChange={handleInputChange}
                        />

                        {searchResults && searchResults.length > 0 ? (
                            searchResults.map((book) => (
                                <>
                                    <Link
                                        href={`/product/${book.id}`}
                                        key={book.id}
                                        className='hover:text-sky-400'
                                        onClick={() => setShow(false)}
                                    >
                                        {book.name}
                                    </Link>
                                    <br />
                                    <br />
                                </>
                            ))
                        ) : (
                            <p>...</p>
                        )}

                    </div>
                    {/* Body */}
                </div>
            </Modal>
        </>
    );
}
