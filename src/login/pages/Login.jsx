import { Link } from "react-router-dom"
import { LoginLayout } from "../layouts/LoginLayout"

export const Login = () => {
    return (
        <LoginLayout>

            <section className="bg-white p-3 h-fit w-fit rounded animate__animated animate__fadeInLeft">

                <h2 className="text-xl text-left text-primary font-bold font-narrow m-2">Login</h2>

                <form className="w-72">
                    <input type="text" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="email"/>
                    <input type="password" className="round w-full h-10 p-3 border-b-2 border-background focus-visible:border-secondary focus-visible:outline-none my-2" placeholder="password"/>
                    <button className="bg-secondary text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">Sign In</button>
                </form>

                <div className="w-72">
                    <hr className="text-background"/>
                    <p className="text-center">or</p>
                    <button className="bg-[#cc3c3c] text-white text-lg font-narrow w-full my-3 rounded p-1 shadow">
                        Sign in with Google
                    </button>
                    <p className="text-center">Don't have an account? <Link to="/register" className="text-primary cursor-pointer hover:underline">Register</Link> </p>
                </div>

            </section>
            
        </LoginLayout>
    )
}
