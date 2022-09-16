import { SearchBar } from "../../components"

export const MainSection = () => {
    return (
        <>
            <section className='mb-12 h-128 min-h-fit flex flex-col sm:mb-40 md:flex-row md:mb-12 lg:h-144'>
                <img className='rounded-md w-144 md:w-80 lg:w-96 xl:w-144 animate__animated animate__fadeInLeft' src="https://res.cloudinary.com/djjjmocyf/image/upload/v1662158337/foozled/Pizza_maker-pana_hnkbaf.svg" alt="Cooking Illusration" />
                <div className='flex flex-col justify-center items-center z-10'>
                    <h1 className='text-2xl font-bold my-4 mx-2 lg:text-4xl'>Reach chef level skills following <br /> <span className='text-primary '>Foozled</span>  recipes</h1>
                    <SearchBar/>
                </div>
            </section>
            <hr className='text-background'/>
        </>
    )
}
