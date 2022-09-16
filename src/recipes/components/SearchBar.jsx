import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline"
export const SearchBar = () => {
    return (
            <div className='w-80 h-12  bg-white rounded-full shadow-md flex flex-row px-5 md:w-96 lg:w-128 xl:w-144'>        
                <SearchIcon className='w-6 mr-4 text-primary'/>
                <input className='h-12 w-80 text-sm focus:outline-none md:w-128 md:text-md xl:w-144 lg:text-lg' placeholder='Search some recipe name or ingredient' type="text" name="" id="" /> 
            </div>
    )
}
