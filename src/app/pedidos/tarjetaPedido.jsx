import React from "react";

export function TarjetaPedido() {
  return (
    <div className="mt-5 mb-5 mx-auto ">
    <div className="mt-5 mb-5 mx-auto ">
      <div className="flex flex-col w-[90%] md:w-[80%] py-3 mx-auto px-3 rounded-md bg-gray-100 border-2 border-gray-300 ">
        <div className="flex flex-row">
          <h1 className=" ml-4 mb-4 text-xs md:text-sm">Order status: Delivered</h1>
          <div className="flex flex-col ml-auto">
            <h1 className=" text-xs md:text-sm ">Order date: 01/10/20</h1>
            <h1 className="  text-xs md:text-sm">Order number: 000001</h1>
          </div>
        </div>
        <hr class="border-t-4 border-gray-400 mx-auto w-[100%] mt-1 md:mt-2 mb-2 rounded-lg"></hr>
        <div>
          <span className="bg-gray-300 w-[70px] md:w-[110px] mx-auto text-black-800 inline-block ml-4 overflow-y-auto text-center text-[8px] md:text-xs px-2 py-0.5 font-medium rounded  transition duration-500 hover:scale-105">
            Satiago Aguirre
          </span>
        </div>
        <div className="flex flex-row">
          <img
            src="https://m.media-amazon.com/images/I/51Bqvp8L-wL.jpg"
            alt="strategy"
            className="w-[70px] h-[110px] md:w-[110px] md:h-[170px] ml-4 md:ml-4 rounded-lg transition duration-500 hover:scale-105"
          />
          <div className="flex flex-row">
            <div className="flex flex-col my-auto">
              <h1 className="text-[9px] md:text-[13px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 overflow-y-auto">
              PHP - Programación Orientada a Objetos - Vol.2

              </h1>
              <h1 className="text-[7px] md:text-[13px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 md:mt-4 overflow-y-auto">
              Programming Languages 
              </h1>
              <div className=" md:mt-4">
                <span className=" ml-2 md:ml-5 bg-green-100 text-green-800 text-[8px] md:text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  $89.44
                </span>
              </div>
            </div>
           
          </div>
          <div className=" flex flex-col ml-auto my-auto ">
              <h1 className="text-[10px] md:text-[16px] mx-auto font-bold tracking-[2px] mt-1 overflow-y-auto">
                Total: 89.44
              </h1>
             
              <button
                type="button"
                class="transition duration-500 mt-2 hover:scale-105 bg-red-200 text-red-800 text-[9px] md:text-sm font-medium  px-3 mx-auto  rounded-full"
              >
                Eliminar
              </button>
              
            </div>
        </div>
      </div>
    </div>
    <div className="mt-5 mb-5 mx-auto ">
      <div className="flex flex-col w-[90%] md:w-[80%] py-3 mx-auto px-3 rounded-md bg-gray-100 border-2 border-gray-300 ">
        <div className="flex flex-row">
          <h1 className=" ml-4 mb-4 text-xs md:text-sm">Order status: Delivered</h1>
          <div className="flex flex-col ml-auto">
            <h1 className=" text-xs md:text-sm ">Order date: 01/10/20</h1>
            <h1 className="  text-xs md:text-sm">Order number: 000002</h1>
          </div>
        </div>
        <hr class="border-t-4 border-gray-400 mx-auto w-[100%] mt-1 md:mt-2 mb-2 rounded-lg"></hr>
        <div>
          <span className="bg-gray-300 w-[70px] md:w-[110px] mx-auto text-black-800 inline-block ml-4 overflow-y-auto text-center text-[8px] md:text-xs px-2 py-0.5 font-medium rounded  transition duration-500 hover:scale-105">
            Mariona Nadal
          </span>
        </div>
        <div className="flex flex-row">
          <img
            src="https://images.cdn2.buscalibre.com/fit-in/360x360/fe/08/fe0851fc22365a047d349d8469fdfe5a.jpg"
            alt="strategy"
            className="w-[70px] h-[110px] md:w-[110px] md:h-[170px] ml-4 md:ml-4 rounded-lg transition duration-500 hover:scale-105"
          />
          <div className="flex flex-row">
            <div className="flex flex-col my-auto">
              <h1 className="text-[9px] md:text-[13px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 overflow-y-auto">
              Curso de programación - Java

              </h1>
              <h1 className="text-[7px] md:text-[13px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 md:mt-4 overflow-y-auto">
              Programming Languages 
              </h1>
              <div className=" md:mt-4">
                <span className=" ml-2 md:ml-5 bg-green-100 text-green-800 text-[8px] md:text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  $54.80
                </span>
              </div>
            </div>
           
          </div>
          <div className=" flex flex-col ml-auto my-auto ">
              <h1 className="text-[10px] md:text-[16px] mx-auto font-bold tracking-[2px] mt-1 overflow-y-auto">
                Total: 54.80
              </h1>
             
              <button
                type="button"
                class="transition duration-500 mt-2 hover:scale-105 bg-red-200 text-red-800 text-[9px] md:text-sm font-medium  px-3 mx-auto  rounded-full"
              >
                Eliminar
              </button>
              
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
