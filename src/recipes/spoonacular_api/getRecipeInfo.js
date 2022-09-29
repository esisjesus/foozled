import axios from "axios"

export const getRecipeInfo = async(id) => {
    const api_key = '8c9baf851deb4dbdbec4ccfbddd5bdf7'
    try {
        
        const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${api_key}`)
        const { image, title, readyInMinutes, servings, healthScore, pricePerServing, veryPopular, vegetarian, veryHealthy, dishTypes, diets, extendedIngredients, analyzedInstructions } = result.data
        const info = { image, title, readyInMinutes, servings, healthScore, pricePerServing, veryPopular, vegetarian, veryHealthy, dishTypes, diets, extendedIngredients, analyzedInstructions }
        return info

    } catch ( error ) {

        console.error( error )
        throw new Error( error )

    }
}
