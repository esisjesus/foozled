import { HeartIcon } from "@heroicons/react/20/solid"
import { ListOfCards } from "../components"
import { MainLayout } from "../layouts/MainLayout"

export const Favorites = () => {

    const recipes = [
        {
            "id": 715594,
            "title": "Homemade Garlic and Basil French Fries",
            "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715497,
            "title": "Berry Banana Breakfast Smoothie",
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716268,
            "title": "African Chicken Peanut Stew",
            "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "imageType": "jpg"
        },
        
    ]
    
    return (
        <MainLayout>
            <div className=" animate__animated animate__fadeIn">
                <h1 className="text-4xl font-narrow font-bold text-secondary text-left ml-6">Jesus' favorite Recipes</h1>
                <ListOfCards recipes={recipes}/>
            </div>
        </MainLayout>
    )
}
