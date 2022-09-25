import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../login/context/AuthContext'

export const PrivateRoutes = ({children}) => {
    const {state} = useContext(AuthContext)

    return state.logged === true ? children : <Navigate to='/auth'/>
}
