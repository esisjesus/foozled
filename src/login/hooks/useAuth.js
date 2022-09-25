import { useState } from "react"

export const useAuth = (initialAuthState) => {
    const [authState, setAuthState] = useState(initialAuthState)

    const login = (obj) => {
        
        setAuthState({ ...obj})

    }

    const logout = () => {

        setAuthState(initialAuthState)

    }

    const loading = () => {
        setAuthState(prevState => ({
            ...prevState, 
            isLoading: true
        }))
    }

    const error = (err) => {
        setAuthState(prevState => ({
            ...prevState, 
            isLoading: false,
            error: err
        }))
    }

    const authManager = {
        state:authState,
        loading,
        login,
        logout,
        error,
    }
    return{
        authManager
    }
}
