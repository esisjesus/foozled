import { Card } from "./Card"
import { Pagination } from "./Pagination"

export const ListOfCards = ( { title, recipes, pagination = false, more= false } ) => {
    return (
        <>
            <div className="mb-5 mx-1 flex justify-between">
                <h1 className="m-3 text-left text-xl sm:text-2xl text-secondary font-bold">{title}</h1>
                {more && 
                    <button className="border-secondary border-2 rounded-md my-3 h-10 w-32 p-1 text-secondary text-md  text-center hover:bg-secondary hover:text-white hover:font-bold">
                        SEE MORE
                    </button>
                }
            </div>
            <hr className="text-secondary"/>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {
                    recipes.map( recipe => <Card key={recipe.id} {...recipe} /> )
                }
            </div>
            {
                pagination && 
                <div className="flex justify-center my-5">
                    <Pagination/>
                </div>
            }
            
        </>
        
    )
}
