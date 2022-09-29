import { ClockIcon, UserGroupIcon, HeartIcon, CurrencyDollarIcon, StarIcon, CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid"
import { useParams } from "react-router-dom";
import { useDetails } from "../hooks";
import { MainLayout } from "../layouts";


export const Detail = () => {

    const {id} = useParams()

    const {info, loading} = useDetails(id)

    const capitalize = (string) => {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    }

    
    

    return (
        <MainLayout>
            {
                loading?
                <span>Loading</span>
                :
                <section className="flex flex-col justify-center items-center w-full md:grid md:grid-cols-2 animate__animated animate__fadeIn">
                    <div className="flex flex-column md:h-full md:w-full">
                        <div className="h-128 w-80 md:w-96 md:h-144 lg:w-128 xl:w-144 rounded" style={{backgroundImage:`url(${info.image})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} ></div>
                    </div>
                    
                    <div>
                        <h2 className="text-xl text-left ml-8 mt-2 pr-3 font-bold">{info.title}</h2>
                        <ul className="font-narrow text-left px-3 ml-8 my-5 text-lg grid grid-cols-2 gap-2">
                            <li>
                                <ClockIcon className="w-6 text-secondary inline-block mr-2" /> {info.readyInMinutes } mins 
                            </li>
                            <li>
                                <UserGroupIcon className="w-6 text-secondary inline-block mr-2"/> {info.servings} servings
                            </li>
                            <li>
                                <HeartIcon className="w-6 text-alternative inline-block mr-2"/> {info.healthScore}/100 health score
                            </li>
                            <li>
                                <CurrencyDollarIcon className="w-6 text-alternative inline-block mr-2"/>{(info.pricePerServing / 100).toFixed(2)} / serving
                            </li>
                            {
                                info.veryPopular && <li> <StarIcon className="w-6 text-primary inline-block mr-2" /> Very popular</li>
                            }
                            {
                                info.vegetarian &&  <li> <CheckCircleIcon className="w-6 text-alternative inline-block mr-2" /> Vegetarian</li>
                            }
                            {
                                info.veryHealthy &&  <li> <PlusCircleIcon className="w-6 text-alternative inline-block mr-2" /> Healthy</li>
                            }
                        </ul>
                        <hr className="text-background"/>
                        
                        {
                            info.dishTypes &&
                            <div className="w-80  mt-3 px-3 ml-8">
                                <h3 className="text-lg text-primary font-narrow font-semibold text-left mb-3" >DISH TYPE</h3>
                                <ul className="font-narrow text-left px-3 my-5 text-lg grid grid-cols-3 gap-2">
                                    {
                                        info.dishTypes.map(type => 
                                            <li>{capitalize(type)}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        }

                        {
                            info.diets && 
                            <div className="w-80  mt-3 px-3 ml-8">
                                <h3 className="text-lg text-primary font-narrow font-semibold text-left mb-3" >DIET LIKE</h3>
                                <ul className="font-narrow text-left px-3 my-3 text-lg">
                                    {
                                        info.diets.map(type => 
                                            <li>{capitalize(type)}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        }
                        
                        <div className="w-80  mt-3 px-3 ml-8">
                            <h3 className="text-lg text-primary font-narrow font-semibold text-left mb-3" >INGREDIENTS</h3>
                            <ul className="font-narrow text-left px-3 my-3 text-lg list-disc">
                                {
                                    info.extendedIngredients.map(ingredient => 
                                        <li className="text-secondary">
                                            <span className="text-[#000]">{ingredient.original}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                        <div className="w-80  mt-3 px-3 ml-8">
                            <h3 className="text-lg text-primary font-narrow font-semibold text-left mb-3" >INSTRUCTIONS</h3>
                            <ul className="font-narrow text-left  my-3 text-lg list-decimal">
                                {
                                    info.analyzedInstructions[0].steps.map(step => 
                                        <li className="text-secondary">
                                            <p className="text-[#000] my-3"> {step.step}</p>
                                        </li>
                                    )
                                }
                                <li className="text-secondary">Enjoy.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            }
        </MainLayout>
    )
}
