import { useAuth } from '../hooks/useAuth'
import { AuthContext } from './AuthContext'

const initialAuthState = {
    email: null,
    displayName: null,
    photoURL: null,
    uid: null,
    isLoading: null,
    error: null,
}

export const AuthProvider = ({children}) => {
    
    const {authManager} = useAuth(initialAuthState)

    return(
        <AuthContext.Provider value={{...authManager}}>
            {children}
        </AuthContext.Provider>
    )
}
