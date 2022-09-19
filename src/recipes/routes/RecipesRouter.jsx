import { Navigate, Route, Routes } from "react-router-dom"
import { Detail, Favorites, Home, Search } from "../pages"

export const RecipesRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/favorites" element={ <Favorites/> }/>
            <Route path="/search" element={ <Search/> }/>
            <Route path="/detail/:id" element={ <Detail/> } />            
            <Route path="/*" element= { <Navigate to='/' />}/>
        </Routes>
    )
}
