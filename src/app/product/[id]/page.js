"use client";

import AddToCart from '@/components/AddToCart'
import React, { useState, useEffect } from "react";
import Data from '@/app/data2'; 
import DataNum from "@/app/data3"
export default function ProductDetailPage({ params: { id } }) {


  const [bookData, setBookData] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (id) {
      // Realiza una solicitud a la API de Google Books utilizando el ID
      // Asegúrate de utilizar el mismo apiKey y formato de solicitud.
      const apiKey = "AIzaSyBX2JQeCcenjKoaqS1rQiZwXOiPzfk5QfA";
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
          );

          if (!response.ok) {
            throw new Error("No se pudo obtener la información del libro");
          }

          const data = await response.json();
          setBookData(data);

          // Aquí actualizamos el arreglo 'books' con la información del libro
          setBooks([
            {
              id: id,
              name: data.volumeInfo.title, // Puedes usar otros campos de 'data' según tu necesidad
              image: data.volumeInfo.imageLinks.thumbnail, // Ajusta esto según la estructura de 'data'
              price: data.saleInfo.listPrice?.amount || "99",
              countInStock: 10,
              rating: 4.5,
              numReviews: 10,
              description: data.volumeInfo.description,
              authors: data.volumeInfo.authors,
              
            }
          ]);
        } catch (error) {
          console.error(error);
        }
      };

      fetchBookDetails();
    }
  }, [id]);


 console.log(books)






  return (
    <div>
      {bookData ? (
        <div className="">
          <div className="flex md:flex-col mx-auto m-1 mt-5 md:ml-16 ml-1">
            <div className="md:flex md:flex-row">
              <div className="flex flex-col flex-grow mx-auto md:ml-4">
                <img
                  src={
                    bookData.volumeInfo.imageLinks
                      ? bookData.volumeInfo.imageLinks.thumbnail
                      : "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"
                  }
                  alt=""
                  className="h-[260px] w-[180px] md:h-[400px] md:w-[320px] mx-auto md:mx- transition duration-500 hover:scale-105 rounded-lg "
                />

                <span className="bg-gray-700 text-white inline-block mx-auto text-center text-md px-2 py-0.5 font-medium rounded  mt-6 transition duration-500 hover:scale-105">
                  {bookData.volumeInfo.authors}
                </span>
              </div>
              <div className="flex flex-col mt-6 w-full">
              <div className='md:ml-14'>

                <div className="flex flex-col mx-auto md:mx-1">
                  <h1 className=" text-[18px] md:text-[25px] font-bold tracking-[2px]  mt-4 overflow-y-auto w-[90%] md:w-[68%]">
                    {bookData.volumeInfo.title}
                  </h1>
                  <h1 className="text-lg text-green-600  mt-2 ">
                    {bookData.saleInfo.listPrice
                      ? bookData.saleInfo.listPrice.amount
                      : "999"}{" "}
                    MXN
                  </h1>
                </div>

                <div className="flex flex-row mt-4 ">
                  {String(bookData.volumeInfo.categories)
                    .split(",")
                    .map((category, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-[6px] overflow-x-hidden md:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 overflow-y-clip overflow-x-hidden"
                      >
                        {category.trim()}
                      </span>
                    ))}
                </div>

                <h1 className=" mt-3 w-[90%] md:w-[70%] text-sm overflow-hidden  h-[180px]">
                  {bookData.volumeInfo.description}
                </h1>

                <div className="flex flex-row">
                

                {books && books.length > 0 ? (
        books.map((product) => (
          <AddToCart
          key={product.id}
          showQty={true}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
        ))
      ) : (
        <p>Sin disponibilidad.</p>
      )}
         
   
                </div>
                
               
                <div className='w-[350px] md:hidden'>
                
                <Data categ={bookData.volumeInfo.authors}/>
                </div>

                <div className='block sm:hidden w-[0px] md:block md:w-[90%]'>
                <DataNum  categ={bookData.volumeInfo.authors}/>

                </div>
               
              </div>
              
            </div>
                         
   
       
          </div>
          </div>


        </div>
      ) : (
        <p></p>
      )}
      
 
    </div>
  );
}
