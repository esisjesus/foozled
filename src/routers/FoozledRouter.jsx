import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { LoginRouter } from "../login/routes/LoginRouter"
import { RecipesRouter } from "../recipes/routes/RecipesRouter"
import { PublicRoutes } from "./PublicRoutes"
import { useContext, useEffect } from "react"
import { AuthContext } from "../login/context/AuthContext"
import { onAuthStateChanged } from "firebase/auth"
import { FbAuth } from "../firebase/config"
import { FavoritesProvider } from "../recipes/context/FavoritesProvider"

export const FoozledRouter = () => {

        const {login, logout, loading} = useContext(AuthContext)

        useEffect(() => {
            loading()
            onAuthStateChanged(FbAuth, (user)=> {
                if(user){
                    const {email, displayName, photoURL, uid} = user
                    login({ email, displayName, photoURL, uid })
                }else{
                    logout()
                }
            })
        }, [])
        
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
                        <FavoritesProvider>
                            <RecipesRouter/>
                        </FavoritesProvider>
                    </PrivateRoutes>
                }/>
            </Routes>

        </>
    )

}
