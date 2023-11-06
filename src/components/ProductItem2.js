"use client";

import Image from 'next/image'
import Link from 'next/link'
import ProductRate from './ProductRate'
import AddToCart from './AddToCart2'
import React, { useState, useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";



export default function ProductItem2({ product}) {

  const [page, setPage] = useState(1); 
  const booksPerPage = 5;
  const [index, setIndex] = useState(0); 

const bookData=[product];


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

 <div className="mx-auto ml-3 mr-3 overflow-x-auto no-scrollbar">

   <div className="flex flex-col w-full mx-auto ">
   
   
   

   <div className="flex-col items-center justify-between mx-auto">
  
     <ul className="flex gap-2 mt-1 mx-auto flex-x-auto overflow-x-auto no-scrollbar">


     {bookData.slice(index, index + booksPerPage).map((book) => ( // Usé el método slice para mostrar solo los libros del índice actual al índice más el número de libros por página
        <li className="group" key={book.id}>
 
              <div className='flex flex-row'>
              <Link href={`/product/${product.id}`}>

             <img
             src={book.image}

               alt=""
               className="mt-2 h-[125px] w-[89px] object-cover transition duration-500 group-hover:scale-105 rounded-lg mx-auto overflow-hidden"
               style={{transition: "transform .5s"}} // Agregué un estilo CSS para la transición
             />
             </Link> 
 
             <div className='my-auto mx-auto ml-2'>
               <h3 className="text-[10px] text-center text-gray-700  w-[80px] overflow-y-auto  h-[30px] no-scrollbar  font-bold">
                 {book.name}
               </h3>
               <AddToCart
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
               
             </div>
             </div>
             
             
         </li>
       ))}
    
     </ul>
     </div>
   </div>
 </div>
 </div>

  )
}
