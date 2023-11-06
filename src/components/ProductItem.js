"use client";

import Image from 'next/image'
import Link from 'next/link'
import ProductRate from './ProductRate'
import AddToCart from './AddToCart'
import React, { useState, useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";


export default function ProductItem({ product }) {

  const [page, setPage] = useState(1);
  const booksPerPage = 5;
  const [index, setIndex] = useState(0);

  const bookData = [product];


  const prevPage = () => {
    if (index > 0) {
      setIndex(index - 1);
      setPage(Math.ceil((index - 1) / booksPerPage) + 1);
    }
  };

  // Definí una función para ir a la página siguiente
  const nextPage = () => {
    if (index < books.length - booksPerPage) {
      setIndex(index + 1); // Aumento el índice en uno
      setPage(Math.ceil((index + 1) / booksPerPage) + 1);
    }
  };


  return (
    <div>

      <div className="mx-auto mt-3 ml-3 mr-3 overflow-x-auto no-scrollbar">

        <div className="flex flex-col w-full mx-auto m-3">




          <div className="flex-col items-center justify-between mx-auto">

            <ul className="flex gap-2 mt-1 mx-auto flex-x-auto overflow-x-auto no-scrollbar">


              {bookData.slice(index, index + booksPerPage).map((book) => ( // Usé el método slice para mostrar solo los libros del índice actual al índice más el número de libros por página
                <li className="group" key={book.id}>
                  <Link href={`/product/${product.id}`}>


                    <img
                      src={book.image}

                      alt=""
                      className="h-[125px] w-[89px] object-cover transition duration-500 group-hover:scale-105 rounded-lg mx-auto overflow-hidden"
                      style={{ transition: "transform .5s" }} // Agregué un estilo CSS para la transición
                    />

                    <div>
                      <h3 className="text-[10px] text-center text-gray-700 group-hover:underline group-hover:underline-offset-4 w-[80px] truncate mt-1 font-bold">
                        {book.name}
                      </h3>


                    </div>

                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}
