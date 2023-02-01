import { FbFirestore } from "../../firebase/config"
import { collection, deleteField, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"

export const addToFav = async( recipe ) => {
    try {
        
        await setDoc( doc( FbFirestore,  `favorites/${recipe.title}`), recipe )

    } catch (error) {

        console.error( error )

    }
}

export const removeFav = async( recipe, id ) => {
    const recipeRef = doc(FbFirestore, `favorites/${recipe.title}`)
    
    try {
        await updateDoc(recipeRef, {
            [id]: deleteField()
        })
    } catch (error) {
        console.error( error )
    }
}

export const getUserFavRecipes = async(id) => {
    const recipesUserLiked = query( collection(FbFirestore, 'favorites'), where(id, "==", id) )
    try {
        const recipesResponse = await getDocs(recipesUserLiked)
        const recipes = []
        recipesResponse.forEach(doc => {
            recipes.push(doc.data())
        })
        return recipes

    } catch (error) {
        console.error( error )
        return []
    }

}