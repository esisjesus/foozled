import { useContext, useEffect, useState } from 'react'
import { addToFav, getUserFavRecipes, removeFav } from '../firebase/favorites'
import { AuthContext } from '../../login/context/AuthContext'

export const useFav = (initialFavList) => {
    const {state} = useContext( AuthContext )
    
    const [favList, setFavList] = useState(initialFavList)
  
    useEffect(() => {
      const resolvedFavRecipes = async () => {
        const list = await getUserFavRecipes(state.uid) 
        setFavList(list)
      }
      resolvedFavRecipes()
    }, [state.uid, favList])
    
    
    const favRecipe = (favDoc) => {
      addToFav(favDoc)
      setFavList(prevState => [...prevState, favDoc])
    }
  
    const unFavRecipe = (favDoc) => {
      removeFav(favDoc, state.uid)
      setFavList(prevState=> {
        prevState.filter(doc => {
          doc.title != favDoc
        })
      })
    }

    const favManager = {
        favList,
        favRecipe,
        unFavRecipe
    }

    return{
      favManager
    }
}
