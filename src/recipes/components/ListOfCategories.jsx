import { useNavigate } from "react-router-dom"

//I hardcoded this component to avoid exceed API calls
export const ListOfCategories = () => {
  
    const navigate = useNavigate()

    const categories = [
        "Healthy",
        "Vegetarian",
        "Vegan",
        "Dinner",
        "Lunch",
        "Breakfast",
        "Brunch",
        "Mexican",
        "Italian",
        "Asian",
        "American",
        "Vietnamese",
        "Mediterranean",
        "French",
        "Greek",
        "Spanish",
        "Middle Eastern",
        "Snacks",
        "Peruvian",
        "Caribbean"
    ]

    const randomGradient = () => {
      const gradients = [
        "bg-gradient-to-r from-[#845EC2] to-[#D65DB1]",
        "bg-gradient-to-r from-[#FF6F91] to-[#FF9671]",
        "bg-gradient-to-r from-[#FFC75F] to-[#F9F871]",
        "bg-gradient-to-r from-[#845EC2] to-[#FF9671]",
        "bg-gradient-to-r from-[#D65DB1] to-[#F9F871]",
        "bg-gradient-to-r from-[#FF6F91] to-[#FFC75F]",
        "bg-gradient-to-r from-[#845EC2] to-[#FF9671]",
        "bg-gradient-to-r from-[#D65DB1] to-[#F9F871]",
        "bg-gradient-to-r from-[#FF6F91] to-[#FFC75F]",
        "bg-gradient-to-r from-[#845EC2] to-[#FF9671]",
      ]
      return gradients[Math.floor(Math.random() * gradients.length)]
    }

    const handleSearch = (evt) => {
      evt.stopPropagation()
      navigate(`/search/${evt.target.id}`)
    }
  

    return (
      <>
        {/* MAIN CONTENT */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate__animated animate__fadeInUp animate__fast">
          {categories.map( category => (
            <div
              key={category}
              className={`cursor-pointer w-72 h-40 m-auto text-center rounded-md ${randomGradient()}`}
              onClick={handleSearch}
              id={category}
            >
              <h2 className="text-2xl mt-16 font-bold text-white pointer-events-none" >{category}</h2>
            </div>
          ))}
        </div>
      </>
    );
}
