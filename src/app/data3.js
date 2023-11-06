
"use client";
import React, { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

export default function DataNum({categ}) {
  const apiKey = 'AIzaSyBX2JQeCcenjKoaqS1rQiZwXOiPzfk5QfA';
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${categ}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('No se pudo obtener la información');
        }

        const data = await response.json();
        setBooks(data.items);

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

        setBookData(bookDataArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const { products } = bookData;

  console.log(bookData)

  return (
    <div>

    <div className="flex flex-row gap-1 overflow-hidden no-scrollbar mt-[-10px] ">


    {bookData && bookData.length > 0 ? (
  bookData.slice(0, 6).map((product, index) => (
    <ProductItem key={product.id} product={product} />
  ))
) : (
  <p>No hay productos disponibles.</p>
)}

    </div>
    </div>
  );
}


