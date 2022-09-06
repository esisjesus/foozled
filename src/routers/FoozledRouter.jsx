import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { Detail, Favorites, Home, Search } from "../pages"

export const FoozledRouter = () => {
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
