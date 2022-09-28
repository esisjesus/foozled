import { Bars3Icon, XMarkIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon as SearchIcon,  ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../login/context/AuthContext"
import { signUserOut } from "../../login/firebase/auth"


const pages = [
  {name: "Home", destination:"/", icon:<HomeIcon className="w-5 mr-1"/>, active: true},
  {name: "Search", destination: "/search", icon:<SearchIcon className="w-5 mr-1"/>, active: true},
  {name: "Favorites", destination:"/favorites", icon:<HeartIcon className="w-5 mr-1"/>, active: true},
]

export const Navbar = () => {
  
  const {state, logout} = useContext(AuthContext)

  const [dropDown, setDropDown] = useState(false)
  const onDropDown = () => {
    setDropDown(!dropDown)
  }

  const signOut = async() => {
    const response = await signUserOut()
    logout()
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
        <div className="w-1/3 flex flex-row justify-end items-center cursor-pointer">
        <span className="hover:text-primary flex flex-row justify-end items-center cursor-pointer" onClick={signOut}><ArrowLeftOnRectangleIcon className="w-6 text-primary"/> Logout</span>
        </div>
      </div>

      {/* MOBILE */}

      <div className="h-auto px-5 md:hidden">
        <div className="flex flex-row justify-between items-center h-14">
          <div className="w-1/3">
            {
              dropDown ?
              <XMarkIcon className="text-black cursor-pointer w-6" onClick={onDropDown}/>
              :<Bars3Icon className="text-black cursor-pointer w-6" onClick={onDropDown}/>
            }
          </div>
          <div className="w-1/3">
            <img className="w-10 mx-auto" src="https://res.cloudinary.com/djjjmocyf/image/upload/v1661978534/foozled/Foozled-1_1_dortcu.png" alt="logo_foozled" />
          </div>
          <div className="w-1/3 ">
            <span className="hover:text-primary flex flex-row justify-end items-center cursor-pointer" onClick={signOut}><ArrowLeftOnRectangleIcon className="w-6 text-primary"/> Logout</span>
          </div>
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

