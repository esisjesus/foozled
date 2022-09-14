import { Navigate, Route, Routes } from "react-router-dom"
import { Detail, Favorites, Home, Login, Register, Search } from "../pages"

export const FoozledRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/favorites" element={ <Favorites/> }/>
            <Route path="/search" element={ <Search/> }/>
            <Route path="/detail/:id" element={ <Detail/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/*" element= { <Navigate to='/' />}/>
        </Routes>
    )

}
