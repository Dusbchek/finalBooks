
"use client";
import React, { useState, useEffect } from "react";
import ProductItem2 from "@/components/ProductItem2";

export default function DataVer({categ}) {
  const apiKey = 'AIzaSyAX85wksEb9ppM_SOymqnYP9NMbTuMAJCQ';
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

    <div className="flex flex-col  overflow-hidden no-scrollbar  ">


    {bookData && bookData.length > 0 ? (
  bookData.slice(0, 4).map((product, index) => (
    <ProductItem2 key={product.id} product={product} />
  ))
) : (
  <p>No hay productos disponibles.</p>
)}

    </div>
    </div>
  );
}


