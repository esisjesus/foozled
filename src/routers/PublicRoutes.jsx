import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../login/context/AuthContext"

export const PublicRoutes = ({children}) => {

    const {state} = useContext(AuthContext)

    return state.logged === false ?  children : <Navigate to= '/'/>
}
