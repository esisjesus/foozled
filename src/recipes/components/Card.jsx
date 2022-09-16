import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartSolid, PlusCircleIcon }  from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"

export const Card = ({id, title, image}) => {

    return (
        <div className='group my-6 mx-auto w-72 cursor-pointer'>
            <img className='rounded-sm w-auto h-auto group-hover:shadow-lg transition-shadow duration-300 '  src={ image } alt={ title }/>
            <div className='my-1 flex flex-row justify-between'>
                <h4 className='text-left w-5/6 truncate font-semibold'>{ title }</h4>
                {/* <HeartIcon className="text-right w-5 text-primary"/> */}
                <HeartSolid className="text-right w-6 text-primary"/>
            </div>
            <Link to={`/detail/${id}`}>
                <button className="float-left flex flex-row items-center rounded-md px-2 hover:bg-[#e5e7eb]">
                    <PlusCircleIcon className="w-5 mr-1 text-alternative"/>See Recipe
                </button>
            </Link>
        </div>
    )
}
