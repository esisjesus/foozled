import { useEffect, useState } from "react"
import { search } from "../spoonacular_api/search"

export const useSearch = ({searchOffset, numberOfResults, searchQuery}) => {
    const [recipes, setRecipes] = useState([])
    const [offSet, setOffSet] = useState(1)
    
    useEffect(() => {
        search({offset:searchOffset, number:numberOfResults, query:searchQuery})
        .then( res => {setRecipes(res.results)} )
    }, [offSet])

    const onNextPage = () => {
        setOffSet(prevOffset => prevOffset + 1)
    }
    const onPrevPage = () => {
        if(offSet == 1) return
        setOffSet(prevOffset => prevOffset - 1)
    }

    return {
        recipes, offSet, onNextPage, onPrevPage 
    }
}
