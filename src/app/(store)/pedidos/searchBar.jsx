import React, { useState } from "react";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pedidos");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeMenu();
  };

  return (
    <div>
      <div className="w-[90%] md:w-[80%] mx-auto bg-gray-100 border-2 border-gray-300 rounded-lg mt-5 h-[100px] relative">
        <div className="flex flex-row">
          <button className="ml-4 mt-2 text-xs md:text-sm hover hover:underline font-bold tracking-[1px]">
            {" "}
            Search
          </button>
          <button className="ml-6 mt-2 text-xs md:text-sm hover hover:underline font-bold tracking-[1px]">
            {" "}
            
          </button>
          <button className="ml-6 mt-2 text-xs md:text-sm hover:underline font-bold tracking-[1px]">
            {" "}
           
          </button>
        </div>
        <div className="mt-4 ml-4">
          <form>
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center md:py-2.5 md:px-4 py-1 px-2 md:text-sm text-xs font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
                type="button"
                onClick={toggleMenu}
              >
                {selectedOption}{" "}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id="dropdown"
                  className="z-10 mt-[50px] absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-28 "
                >
                  <ul
                    className="py-2 text-sm text-gray-700 "
                    aria-labelledby="dropdown-button"
                  >
                    <li className="">
                      <button
                        type="button"
                        className="inline-flex w-full text-xs md:text-sm px-4 py-2 hover:bg-gray-100 "
                        onClick={() => handleOptionSelect("Pedidos")}
                      >
                        Pedidos
                      </button>
                    </li>
                    <li className="">
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2  text-xs md:text-sm hover:bg-gray-100"
                        onClick={() => handleOptionSelect("Numero 1")}
                      >
                        Numero 1
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full text-xs md:text-sm px-4 py-2 hover:bg-gray-100 "
                        onClick={() => handleOptionSelect("Numero 2")}
                      >
                        Numero 2
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-xs md:text-sm hover:bg-gray-100 "
                        onClick={() => handleOptionSelect("Numero 3")}
                      >
                        Numero 3
                      </button>
                    </li>
                    <li>
                     
                    </li>
                  </ul>
                </div>
              )}
              <div className="relative w-full ">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-[95%] md:w-[50%] z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300
                   focus:ring-blue-500 focus:border-blue-500
                    "
                  placeholder="Número de pedido..."
                  required
                />
             
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
