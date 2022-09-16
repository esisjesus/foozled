import { Navbar } from "../components"

export const MainLayout = ({children}) => {
    return (
        <>
            <div className='container mx-auto mb-20'>
                <Navbar/>
                { children }
            </div>
        </>
    )
}
