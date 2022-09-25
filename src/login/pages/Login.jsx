import { Link } from "react-router-dom"
import { useForm } from "../hooks"
import { signInWithEmail, signInWithGoogle } from "../firebase/auth"
import { LoginLayout } from "../layouts/LoginLayout"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { validateAuth } from "../validations"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"

const initialForm = {
    email: '',
    password: ''
}

export const Login = () => {

    const {email, password, onInputChange} = useForm(initialForm)
    const authContext = useContext(AuthContext)

    // This block is meant to be refactored and encapsulated to an isolated function at some point, as it could be reused several times -- Pending task
    const onSubmitForm = async( evt ) => {
        evt.preventDefault()

        authContext.loading()

        // Prevents a unnecessary post request to firebase
        const validationError = validateAuth( { email, password } ) 
        if(validationError) return authContext.error( validationError )

        const response = await signInWithEmail( email, password )

        const { photoURL, uid, displayName } = response.user? response.user : authContext.state
        uid? authContext.login({ email, displayName, photoURL, uid }): authContext.error( response )
    }

    const onGoogleSignIn = async() => {
        
        authContext.loading()

        const response = await signInWithGoogle()
        const { photoURL, uid, displayName } = response.user? response.user : authContext.state
        uid? authContext.login({ email, displayName, photoURL, uid }): authContext.error( response )
    }

    return (
        <LoginLayout>


            <section className="bg-white p-3 h-fit w-fit rounded animate__animated animate__fadeInLeft">

                <h2 className="text-xl text-left text-primary font-bold font-narrow m-2">Login</h2>

                <form onSubmit={onSubmitForm} className="w-72">
                    <input name="email" value={email} onChange={onInputChange} type="text" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="email"/>
                    <input name="password" value={password} onChange={onInputChange} type="password" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="password"/>
                    {
                        authContext.state.error && 
                        <p className="text-[#ff2c2c] text-sm">
                            <ExclamationCircleIcon className="inline-block w-4"/> {authContext.state.error}
                        </p>
                    }
                    <button className="bg-secondary text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">Sign In</button>
                </form>


                <div className="w-72">
                    <hr className="text-background"/>
                    <p className="text-center">or</p>
                    <button onClick={onGoogleSignIn} className="bg-[#cc3c3c] text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">
                        Sign in with Google
                    </button>
                    <p className="text-center">Don't have an account? <Link to="/register" className="text-primary cursor-pointer hover:underline">Register</Link> </p>
                </div>

            </section>
            
        </LoginLayout>
    )
}
