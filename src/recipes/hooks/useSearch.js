import { useEffect, useState } from "react"
import { search } from "../spoonacular_api/search"

export const useSearch = ({searchOffset, numberOfResults, searchQuery}) => {
    const [recipes, setRecipes] = useState([])
    const [offSet, setOffSet] = useState(searchOffset)
    
    useEffect(() => {
        search({offset:offSet, number:numberOfResults, query:searchQuery})
        .then( res => setRecipes(res.results) )
    }, [offSet])

    const onNextPage = () => {
        setOffSet(prevOffset => prevOffset + numberOfResults )
    }
    const onPrevPage = () => {
        setOffSet(prevOffset => prevOffset - numberOfResults )
    }

    return {
        recipes, offSet, onNextPage, onPrevPage 
    }
}
