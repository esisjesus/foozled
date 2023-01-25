import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../login/hooks/useForm"

const initialForm = {
    search : ''
}

export const SearchBar = () => {

    const { search, onInputChange} = useForm(initialForm)

    const navigate = useNavigate()

    const onSearch = ( evt ) => {

        evt.preventDefault()
        
        search.length > 0 ?
        navigate(`/search/${search}`)
        :navigate(`/search`)
    }

    return (
        
            <div className='w-80 h-12  bg-white rounded-full shadow-md flex flex-row px-5 md:w-96 lg:w-128 xl:w-144 overflow-hidden'>        
                <form className="flex flex-row" onSubmit={onSearch}>
                    <SearchIcon className='w-6 mr-4 text-primary'/>
                    <input name="search" value={ search } onChange={onInputChange} className='w-80 h-12 text-sm focus:outline-none md:w-128 md:text-md xl:w-144 lg:text-lg' placeholder='Search your next dish' type="text"/> 
                </form>
            </div>
    )
}
