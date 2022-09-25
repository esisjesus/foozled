import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { createNewUser, signInWithGoogle } from "../firebase/auth"
import { useForm } from "../hooks"
import { LoginLayout } from "../layouts/LoginLayout"
import { validateAuth } from "../validations"

const initialForm = {
    email: '',
    password: '',
    displayName: '',
}


export const Register = () => {
    
    const {email, password, displayName, onInputChange} = useForm(initialForm)
    const authContext = useContext(AuthContext)
    
    // This block is meant to be refactored and encapsulated to an isolated function at some point, as it could be reused several times -- Pending task
    const onSubmitForm = async(evt) => {
        evt.preventDefault()

        authContext.loading()

        // Prevents a unnecessary post request to firebase
        const validationError = validateAuth({email, password}) 
        if(validationError) return authContext.error( validationError )

        const response = await createNewUser(email, password, displayName)

        const {photoURL, uid} = response.user? response.user : authContext.state
        uid? authContext.login({email, displayName, photoURL, uid}): authContext.error(response)
    }

    const onGoogleSignIn = async() => {
        
        authContext.loading()

        const response = await signInWithGoogle()
        const {photoURL, uid, displayName} = response.user? response.user : authContext.state
        uid? authContext.login({email, displayName, photoURL, uid}): authContext.error(response)
    }

    return (
        <LoginLayout>
            <section className="bg-white p-3 h-fit w-fit rounded animate__animated animate__fadeInRight">
                <h2 className="text-xl text-left text-primary font-bold font-narrow m-2">Register</h2>
                <form onSubmit={onSubmitForm} className="w-72">
                    <input required name="displayName" value={displayName} onChange={onInputChange} type="text" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="Username"/>
                    <input required name="email" value={email} onChange={onInputChange} type="text" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="email"/>
                    <input required name="password" value={password} onChange={onInputChange} type="password" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="password"/>
                    <button type="submit" className="bg-secondary text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">Create account</button>
                </form>

                {
                    authContext.state.error && 
                    <p className="text-[#ff2c2c] text-sm">
                        <ExclamationCircleIcon className="inline-block w-4"/> {authContext.state.error}
                    </p>
                }
                
                <div className="w-72">
                    <hr className="text-background"/>
                    <p className="text-center">or</p>
                    <button onClick={onGoogleSignIn} className="bg-[#cc3c3c] text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">
                        Sign in with Google
                    </button>
                    <p className="text-center">Already have an account? <Link to="/login" className="text-primary cursor-pointer hover:underline">Login</Link> </p>
                </div>

            </section>
        </LoginLayout>
    )
    }
