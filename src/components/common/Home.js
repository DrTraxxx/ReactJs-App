const Home = () => {
    return (
        <div>
            <div className="md:flex">
                <form className="sm md ml-60 mt-40 w-1/4">
                    <h1 className="text-center sm:text-left font-black text-3xl ">Find Pet doc in your city</h1>
                    <div className="mb-6 mt-10">
                        <select id="city" className="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue={'Choose a city'}>Choose a city</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <select id="specialties" className="bg-gray-50 border border-gray-300 text-gray-900 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue={'Choose a specialty'}>Choose a specialty</option>
                            <option value="AP">Anatomic pathology</option>
                            <option value="AB">Animal behavior</option>
                            <option value="AAM">Aquatic animal medicine</option>
                            <option value="AV">Avian medicine</option>
                            <option value="BM">Bovine medicine</option>
                            <option value="CM">Canine medicine</option>
                            <option value="D">Dentistry</option>
                            <option value="DM">Dermatology</option>
                            <option value="OM">Oncology</option>
                        </select>
                    </div>
                    <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Search</button>
                </form>
                <img src="https://st3.depositphotos.com/12530034/35781/v/380/depositphotos_357811116-stock-illustration-coloring-pages-black-white-cute.jpg?forcejpeg=true" className=" invisible md:visible ml-80 w-1/4  h-1/5 rounded-full" alt="" />
            </div>
        </div>
    )
} 

export default Home