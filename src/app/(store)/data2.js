
"use client";
import React, { useState, useEffect } from "react";
import ProductItem from "@/components/ProductItem";

export default function Data({categ}) {
  const apiKey = 'AIzaSyAX85wksEb9ppM_SOymqnYP9NMbTuMAJCQ';
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <p className="pt-2 pb-1 tracking-[3px] text-lg m-3 mb-[-20px] md:ml-4 font-medium ">{categ}</p>

    <div className="flex flex-row gap-1 overflow-x-auto no-scrollbar mb-3 ">


      {bookData && bookData.length > 0 ? (
        bookData.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
    </div>
  );
}


