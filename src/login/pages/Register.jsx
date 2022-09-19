import { Link } from "react-router-dom"
import { createNewUser, signInWithGoogle } from "../firebase/auth"
import { useForm } from "../hooks"
import { LoginLayout } from "../layouts/LoginLayout"

const initialForm = {
    email: '',
    password: '',
    displayName: ''
}


export const Register = () => {
    
    const {email, password, displayName, onInputChange} = useForm(initialForm)
    
    const onSubmitForm = (evt) => {
        evt.preventDefault()
        
        createNewUser(email, password)
    }

    return (
        <LoginLayout>
            <section className="bg-white p-3 h-fit w-fit rounded animate__animated animate__fadeInRight">

            <h2 className="text-xl text-left text-primary font-bold font-narrow m-2">Register</h2>

            <form onSubmit={onSubmitForm} className="w-72">
                <input name="displayName" value={displayName} onChange={onInputChange} type="text" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="Username"/>
                <input name="email" value={email} onChange={onInputChange} type="text" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="email"/>
                <input name="password" value={password} onChange={onInputChange} type="password" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="password"/>
                <button type="submit" className="bg-secondary text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">Create account</button>
            </form>

            <div className="w-72">
                <hr className="text-background"/>
                <p className="text-center">or</p>
                <button onClick={signInWithGoogle} className="bg-[#cc3c3c] text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">
                    Sign in with Google
                </button>
                <p className="text-right">Already have an account? <Link to="/login" className="text-primary cursor-pointer hover:underline">Login</Link> </p>
            </div>

            </section>
        </LoginLayout>
    )
}
