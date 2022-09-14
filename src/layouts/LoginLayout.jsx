export const LoginLayout = ({children}) => {
    return (
        <div className="h-screen" >

            

            <div className="h-full w-full flex flex-col items-center justify-center z-40 absolute" style={{backgroundImage: 'url("https://res.cloudinary.com/djjjmocyf/image/upload/v1662955952/foozled/the-hands-of-chef-cutting-vegetables-in-his-kitchen_1_biflxt.png")', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat', }}>
                <div className="h-fit w-full ">  
                            <h2 className="text-white text-center m-4  text-2xl font-bold font-narrow">
                            <img className="w-10 inline-block mr-1" src="https://res.cloudinary.com/djjjmocyf/image/upload/v1662934937/foozled/Foozled-1_soy1uh.png" alt="logo_foozled" />
                                Foozled
                            </h2>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
