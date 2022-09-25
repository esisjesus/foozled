import { Navigate, Route, Routes } from "react-router-dom"
import { Detail, Favorites, Home, Search } from "../recipes/pages"
import { Login, Register } from "../login/pages"
import { PrivateRoutes } from "./PrivateRoutes"
import { LoginRouter } from "../login/routes/LoginRouter"
import { RecipesRouter } from "../recipes/routes/RecipesRouter"
import { PublicRoutes } from "./PublicRoutes"

export const FoozledRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element= {
                    <PublicRoutes>
                        <LoginRouter/>
                    </PublicRoutes>
                }/>

                <Route path="/*" element= {
                    <PrivateRoutes>
                        <RecipesRouter/>
                    </PrivateRoutes>
                }/>
            </Routes>

        </>
    )

}
