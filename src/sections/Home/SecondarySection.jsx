import { ListOfCards } from "../../components"

export const SecondarySection = () => {
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
            "id": 716381,
            "title": "Nigerian Snail Stew",
            "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 794349,
            "title": "Broccoli and Chickpea Rice Salad",
            "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715446,
            "title": "Slow Cooker Beef Stew",
            "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 766453,
            "title": "Hummus and Za'atar",
            "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716627,
            "title": "Easy Homemade Rice and Beans",
            "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716408,
            "title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
            "image": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 795751,
            "title": "Chicken Fajita Stuffed Bell Pepper",
            "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 640941,
            "title": "Crunchy Brussels Sprouts Side Dish",
            "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 798400,
            "title": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
            "image": "https://spoonacular.com/recipeImages/798400-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 756814,
            "title": "Powerhouse Almond Matcha Superfood Smoothie",
            "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 729366,
            "title": "Plantain Salad",
            "image": "https://spoonacular.com/recipeImages/729366-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715769,
            "title": "Broccolini Quinoa Pilaf",
            "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782600,
            "title": "Quinoa Salad with Vegetables and Cashews",
            "image": "https://spoonacular.com/recipeImages/782600-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 642605,
            "title": "Farro With Mushrooms and Asparagus",
            "image": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
            "imageType": "jpg"
        }
    ]
    return (
        <>
            <ListOfCards title="Related to your likes" recipes={ recipes.slice(8, 12) } more={true}/>
            <ListOfCards title="From your last search" recipes={ recipes.slice(0, 4) } more={true}/>
            <ListOfCards title="All Recipes" recipes={ recipes } pagination={true}/>
        </>
    )
}
