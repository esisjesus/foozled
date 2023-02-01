import { HeartIcon } from "@heroicons/react/20/solid"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../login/context/AuthContext"
import { ListOfRecipes } from "../components"
import { FavoritesContext } from "../context/FavoritesContext"
import { MainLayout } from "../layouts/MainLayout"

export const Favorites = () => {

    const {state} = useContext(AuthContext)

    const {favList} = useContext(FavoritesContext)
    
    const [haveFavs, setHaveFavs] = useState(null)

    useEffect(() => {
      setHaveFavs(favList && favList.length)
    }, [favList])
    
    
    return (
        <MainLayout>
            <div className=" animate__animated animate__fadeIn">
                <h1 className="text-4xl font-narrow font-bold text-secondary text-left ml-6">{state.displayName}'s favorite Recipes</h1>
                {haveFavs?
                <ListOfRecipes recipes={favList}/>
                : 
                <div style={{height: 'calc(100vh - 200px)'}} className="flex flex-col justify-center items-center">
                    <img className="w-144" src="https://res.cloudinary.com/djjjmocyf/image/upload/v1662933518/foozled/Chef-amico_su06pf.svg" alt="empty chef amico" />
                    <h2 className="text-secondary font-semibold text-lg">You dont have favorites yet 💔</h2>
                </div>
            }
            </div>
        </MainLayout>
    )
}
