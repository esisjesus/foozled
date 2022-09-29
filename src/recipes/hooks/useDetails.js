import { useEffect, useState } from "react"
import { getRecipeInfo } from "../spoonacular_api"

export const useDetails = (id) => {
    
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getRecipeInfo(id)
        .then(data => {
            setInfo(data)
            setLoading(false)
        })
    }, [id])

    return {info, loading}
}
