import { useEffect, useState } from "react"
import { search } from "../spoonacular_api/search"

export const useSearch = ({searchOffset, numberOfResults, searchQuery}) => {
    const [recipes, setRecipes] = useState([])
    const [offSet, setOffSet] = useState(searchOffset)
    
    useEffect(() => {
    const storedResults = localStorage.getItem("searchResults")
    const lastSearchQuery = localStorage.getItem("searchQuery")
    const lastOffset = localStorage.getItem("lastOffset")
    if(storedResults && lastSearchQuery === (typeof searchQuery == 'undefined'? 'null': searchQuery ) && lastOffset === offSet.toString()){
        setRecipes(JSON.parse(storedResults).results);
    }else{
        search({offset:offSet, number:numberOfResults, query:searchQuery})
        .then( res => {
            localStorage.setItem("searchResults", JSON.stringify(res) )
            localStorage.setItem("searchQuery", typeof searchQuery == 'undefined'? null : searchQuery )
            localStorage.setItem("lastOffset", offSet )
            setRecipes(res.results);
        });}
        // search({offset:offSet, number:numberOfResults, query:searchQuery})
        // .then( res => setRecipes(res.results) )
    }, [offSet, searchQuery])

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
