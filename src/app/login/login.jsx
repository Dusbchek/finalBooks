import React from 'react';

export function Login() {
  return (
    <div className='h-screen flex flex-row '>
      <div className='w-full md:w-2/5 h-screen flex flex-col '>
        <img
          className='mx-auto h-[100px] w-[100px] mt-[30%] md:mt-[25%]'
          src="https://images.vexels.com/media/users/3/139752/isolated/preview/532e26143a0435e9c6ca7f436474389f-icono-de-libros.png"
          alt="Logo"
        />

        <form className='md:mx-auto flex flex-col'>
          <label for="email" className='mb-2 text-sm font-medium text-gray-900 '>Your email</label>
          <input
            type="email"
            id="email"
            className='w-[70%] md:w-[100%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'
            placeholder="name@booksforAll.com"
            required
          />

          <label for="password" className='mt-2 mb-2 text-sm font-medium text-gray-900 '>Your password</label>
          <input
            type="password"
            id="password"
            className=' w-[70%] md:w-[100%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'
            required
          />



          <div className='flex items-start mb-6 mx-auto'>
            <div className='flex items-center h-5 mt-3'>
              <input
                id="remember"
                type="checkbox"
                value=""
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 '
                required
              />
            </div>
            <label for="remember" className='ml-2 mt-3 text-sm font-medium text-gray-900 '>Remember me</label>
          </div>

          <button
            type="submit"
            className='w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto w-full sm:w-auto px-5 py-2.5 text-center '
          >
            Sign in
          </button>
        </form>
      </div>
      <div className='w-3/5 h-screen hidden sm:inline-block md:block'>
        <img
          className='w-full h-full object-cover'
          src="https://images.unsplash.com/photo-1541123039768-be0b59340e7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
