import { Bars3Icon, XMarkIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { Link } from "react-router-dom"


const pages = [
  {name: "Home", destination:"/", icon:<HomeIcon className="w-5 mr-1"/>, active: true},
  {name: "Search", destination: "/search", icon:<SearchIcon className="w-5 mr-1"/>, active: true},
  {name: "Favorites", destination:"/favorites", icon:<HeartIcon className="w-5 mr-1"/>, active: true},
]

export const Navbar = () => {
  
  const [dropDown, setDropDown] = useState(false)
  const onDropDown = () => {
    setDropDown(!dropDown)
  }


  return (
    <nav className="transition rounded shadow-md bg-white mb-12 pt-1 md:pt-0">
      {/* DESKTOP */}
      <div className="flex-row justify-between h-16 px-5 hidden md:flex">
        <div className="w-2/3">
          <ul className="h-full flex flex-row justify-around  items-center xl:pr-96 lg:pr-64 md:pr-28">
            <li className="w-full">
              <img className="w-10" src="https://res.cloudinary.com/djjjmocyf/image/upload/v1661978534/foozled/Foozled-1_1_dortcu.png" alt="logo_foozled" />
            </li>
            {
              pages.map(el => 
                <li key={el.name} className=" w-full text-[#7e7e7e] hover:text-primary hover:font-semibold flex flex-row items-center">
                  {el.icon}
                  <Link to={el.destination}>
                    {el.name}
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
        <div className="w-1/3 flex flex-row justify-end items-center">
          <span>Profile</span>
        </div>
      </div>

      {/* MOBILE */}

      <div className="h-auto px-5 md:hidden">
        <div className="flex flex-row justify-between items-center h-14">
          {
            dropDown ?
            <XMarkIcon className="text-black cursor-pointer w-6" onClick={onDropDown}/>
            :<Bars3Icon className="text-black cursor-pointer w-6" onClick={onDropDown}/>
          }
            
          <img className="w-10" src="https://res.cloudinary.com/djjjmocyf/image/upload/v1661978534/foozled/Foozled-1_1_dortcu.png" alt="logo_foozled" />
          <span>Profile</span>
        </div>
        {/* DROPDOWN MENU */}
        {
          dropDown &&
          <div className="pt-5 pb-5">
            <ul className="flex flex-col items-center">
                {
                  pages.map(el => 
                    <li className="mt-3 text-[#7e7e7e] hover:text-primary flex flex-row items-center" key={el.name}>
                      {el.icon}
                      <Link to={el.destination}>
                        {el.name}
                      </Link>
                    </li>
                  )
                }
            </ul>
          </div> 
        }
      </div>
    </nav>
  )
}

