const SearchRate = () => {
    return (
        // <div className="px-72 pt-40 flex flex-col items-center justify-center gap-6">
        //     <h1
        //         className="text-4xl text-blue-700 font-extrabold">
        //         Scrap Rate
        //     </h1>
        //     <input 
        //         type="text" 
        //         className="p-2 w-full border border-solid border-black rounded-s-full rounded-e-full text-black placeholder-black"
        //         placeholder="Type to Search"
        //     />
        // </div>
        <div className="px-4 sm:px-16 md:px-32 lg:px-48 xl:px-72 pt-20 sm:pt-24 md:pt-32 lg:pt-40 flex flex-col items-center justify-center gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0cc0df] font-extrabold">
                Scrap Rate
            </h1>
            <input 
                type="text" 
                className="p-2 w-2/3 sm:w-3/4 md:w-4/5 lg:w-11/12 rounded-full bg-black text-white placeholder-white shadow-lg shadow-black hover:text-lg"
                placeholder="Type to Search"
            />
        </div>
    )
};

export default SearchRate;