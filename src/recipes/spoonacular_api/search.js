import axios from "axios"

export const search = async({number = 20, offset = 1, query= ''}) => {
    const api_key = '8c9baf851deb4dbdbec4ccfbddd5bdf7'
    try {
        
        const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&number=${number}&offset=${offset}&query=${query}`)
        const { data } = await result
        return data

    } catch ( error ) {

        console.error( error )
        throw new Error( error )

    }

}
