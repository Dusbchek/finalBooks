export default function AddBook() {
    return (
        <>

            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Title</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book title" required />
                    </div>
                    <div class="flex flex-row w-full">
                        <div class="mr-3 w-full">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Price</label>
                            <input type="number" id="last_name" class="mb-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                        </div>
                        <div class="w-full mr-3">
                            <label for="editorial" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Publisher</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Planet" required />

                        </div>
                        <div class="w-full">
                            <label for="editorial" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Stock</label>
                            <input type="number" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />

                        </div>
                    </div>
                    <div>
                        <label for="description" class="block mb-4 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Description</label>
                        <textarea type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[80%] mb-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This captivating book immerses you in a world of adventures and emotions. With intriguing characters and a gripping plot, it will take you to unexplored places as you explore thought-provoking universal themes. An essential read that will keep you hooked from start to finish" required>
                        </textarea>
                    </div>
                    <div>
                        <label for="Authors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Authors</label>
                        <input type="tel" id="phone" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rolando Evelio" required />
                        <input type="tel" id="phone" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abraham Sosa" required />
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enrique Peña" required />


                    </div>
                    <div>

                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input font-medium tracking-[1px]">Upload file</label>
                        <input class="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        <button type="submit" class="right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


                    </div>

                    <div class="w-full">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-medium tracking-[1px]">Genre</label>
                        <input type="tel" id="category" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Horror" required />
                        <input type="tel" id="category" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mistery" required />
                        <input type="tel" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Drama" required />
                    </div>

                </div>

            </form>

        </>
    );
}
