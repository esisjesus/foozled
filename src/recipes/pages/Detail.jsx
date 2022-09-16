import { ClockIcon, UserGroupIcon, HeartIcon, CurrencyDollarIcon, StarIcon, CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid"
import { MainLayout } from "../layouts";


export const Detail = () => {
    
    const capitalize = (string) => {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    }

    const info = {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 7,
        "gaps": "no",
        "preparationMinutes": 15,
        "cookingMinutes": 45,
        "aggregateLikes": 4,
        "healthScore": 12,
        "creditsText": "Allrecipes",
        "sourceName": "Allrecipes",
        "pricePerServing": 167.62,
        "extendedIngredients": [
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "black pepper",
                "nameClean": "black pepper",
                "original": "1/2 teaspoon black pepper",
                "originalName": "black pepper",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "5 teaspoons butter",
                "originalName": "butter",
                "amount": 5.0,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 5.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 5.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consistency": "SOLID",
                "name": "carrot",
                "nameClean": "carrot",
                "original": "1 medium carrot, diced",
                "originalName": "carrot, diced",
                "amount": 1.0,
                "unit": "medium",
                "meta": [
                    "diced"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    }
                }
            },
            {
                "id": 2031,
                "aisle": "Spices and Seasonings",
                "image": "chili-powder.jpg",
                "consistency": "SOLID",
                "name": "cayenne pepper",
                "nameClean": "ground cayenne pepper",
                "original": "1/4 teaspoon cayenne pepper",
                "originalName": "cayenne pepper",
                "amount": 0.25,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 6194,
                "aisle": "Canned and Jarred",
                "image": "chicken-broth.png",
                "consistency": "LIQUID",
                "name": "chicken broth",
                "nameClean": "chicken broth",
                "original": "3 cups chicken broth",
                "originalName": "chicken broth",
                "amount": 3.0,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 709.764,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2009,
                "aisle": "Spices and Seasonings",
                "image": "chili-powder.jpg",
                "consistency": "SOLID",
                "name": "chili powder",
                "nameClean": "chili powder",
                "original": "2 teaspoons chili powder",
                "originalName": "chili powder",
                "amount": 2.0,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "2 cloves garlic, diced",
                "originalName": "garlic, diced",
                "amount": 2.0,
                "unit": "cloves",
                "meta": [
                    "diced"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    }
                }
            },
            {
                "id": 1062047,
                "aisle": "Spices and Seasonings",
                "image": "garlic-salt.jpg",
                "consistency": "SOLID",
                "name": "garlic salt",
                "nameClean": "garlic salt",
                "original": "1 teaspoon garlic salt",
                "originalName": "garlic salt",
                "amount": 1.0,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 11333,
                "aisle": "Produce",
                "image": "green-pepper.jpg",
                "consistency": "SOLID",
                "name": "green bell pepper",
                "nameClean": "green pepper",
                "original": "1/2 large green bell pepper, diced",
                "originalName": "green bell pepper, diced",
                "amount": 0.5,
                "unit": "large",
                "meta": [
                    "diced",
                    "green"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "large",
                        "unitLong": "larges"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "large",
                        "unitLong": "larges"
                    }
                }
            },
            {
                "id": 11979,
                "aisle": "Canned and Jarred;Produce;Ethnic Foods",
                "image": "jalapeno-pepper.png",
                "consistency": "SOLID",
                "name": "jalapeno pepper",
                "nameClean": "jalapeno pepper",
                "original": "1 jalapeno pepper, diced",
                "originalName": "jalapeno pepper, diced",
                "amount": 1.0,
                "unit": "",
                "meta": [
                    "diced"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11278,
                "aisle": "Produce",
                "image": "okra.png",
                "consistency": "SOLID",
                "name": "okra",
                "nameClean": "okra",
                "original": "1 cup sliced fresh okra",
                "originalName": "sliced fresh okra",
                "amount": 1.0,
                "unit": "cup",
                "meta": [
                    "fresh",
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "onion",
                "nameClean": "onion",
                "original": "1/2 medium onion, diced",
                "originalName": "onion, diced",
                "amount": 0.5,
                "unit": "medium",
                "meta": [
                    "diced"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    }
                }
            },
            {
                "id": 2028,
                "aisle": "Spices and Seasonings",
                "image": "paprika.jpg",
                "consistency": "SOLID",
                "name": "paprika",
                "nameClean": "paprika",
                "original": "1/4 teaspoon paprika",
                "originalName": "paprika",
                "amount": 0.25,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1022068,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "red-wine-vinegar.jpg",
                "consistency": "LIQUID",
                "name": "red wine vinegar",
                "nameClean": "red wine vinegar",
                "original": "1 tablespoon red wine vinegar",
                "originalName": "red wine vinegar",
                "amount": 1.0,
                "unit": "tablespoon",
                "meta": [
                    "red"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 1042047,
                "aisle": "Spices and Seasonings",
                "image": "garlic-salt.jpg",
                "consistency": "SOLID",
                "name": "seasoned salt",
                "nameClean": "seasoned salt",
                "original": "1 teaspoon seasoned salt",
                "originalName": "seasoned salt",
                "amount": 1.0,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1045062,
                "aisle": "Meat",
                "image": "chicken-breasts.png",
                "consistency": "SOLID",
                "name": "skinless boneless chicken breast halves",
                "nameClean": "chicken breast halves",
                "original": "4 skinless, boneless chicken breast halves",
                "originalName": "skinless, boneless chicken breast halves",
                "amount": 4.0,
                "unit": "",
                "meta": [
                    "boneless",
                    "skinless"
                ],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 10220444,
                "aisle": "Pasta and Rice",
                "image": "uncooked-white-rice.png",
                "consistency": "SOLID",
                "name": "white rice",
                "nameClean": "long grain rice",
                "original": "1 1/2 cups uncooked long grain white rice",
                "originalName": "uncooked long grain white rice",
                "amount": 1.5,
                "unit": "cups",
                "meta": [
                    "long grain",
                    "white",
                    "uncooked"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            }
        ],
        "id": 251610,
        "title": "Hearty Garden Chicken and Rice",
        "readyInMinutes": 60,
        "servings": 6,
        "sourceUrl": "http://allrecipes.com/Recipe/Hearty-Garden-Chicken-and-Rice/Detail.aspx",
        "image": "https://spoonacular.com/recipeImages/251610-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>gluten free main course</b>? Hearty Garden Chicken and Rice could be an amazing recipe to try. This recipe serves 6 and costs $1.66 per serving. One portion of this dish contains around <b>21g of protein</b>, <b>6g of fat</b>, and a total of <b>311 calories</b>. 4 people have made this recipe and would make it again. A mixture of pepper, paprika, jalapeno pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the butter you could follow this main course with the <a href=\"https://spoonacular.com/recipes/cinnamon-butter-cake-60334\">Cinnamon Butter Cake</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>1 hour</b>. It is brought to you by Allrecipes. Taking all factors into account, this recipe <b>earns a spoonacular score of 54%</b>, which is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/hearty-chicken-and-rice-salad-406986\">Hearty Chicken and Rice Salad</a>, <a href=\"https://spoonacular.com/recipes/moms-hearty-chicken-and-rice-soup-218505\">Mom's Hearty Chicken and Rice Soup</a>, and <a href=\"https://spoonacular.com/recipes/simple-hearty-chicken-and-rice-soup-12267\">Simple, Hearty, Chicken And Rice Soup</a>.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [],
        "winePairing": {},
        "instructions": "In a pot, bring the rice and chicken broth to a boil. Reduce heat to low, cover, and simmer 20 minutes.                            In a pot with enough water to cover, boil the chicken breast halves 20 minutes, or until juices run clear. Drain, cool, and cut into chunks.                            Melt the butter in a large skillet over medium heat, and saute the onion, green bell pepper, jalapeno pepper, carrot, okra, and garlic until tender. Mix in the cooked chicken and red wine vinegar. Continue to cook and stir 5 minutes.                            Mix the cooked rice into the skillet. Season the mixture with chili powder, garlic salt, paprika, seasoned salt, cayenne pepper, and black pepper. Continue cooking until heated through.                                                Kitchen-Friendly View",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In a pot, bring the rice and chicken broth to a boil. Reduce heat to low, cover, and simmer 20 minutes.",
                        "ingredients": [
                            {
                                "id": 6194,
                                "name": "chicken broth",
                                "localizedName": "chicken broth",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ],
                        "length": {
                            "number": 20,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "In a pot with enough water to cover, boil the chicken breast halves 20 minutes, or until juices run clear.",
                        "ingredients": [
                            {
                                "id": 1045062,
                                "name": "chicken breast halves",
                                "localizedName": "chicken breast halves",
                                "image": "chicken-breasts.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ],
                        "length": {
                            "number": 20,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Drain, cool, and cut into chunks.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Melt the butter in a large skillet over medium heat, and saute the onion, green bell pepper, jalapeno pepper, carrot, okra, and garlic until tender.",
                        "ingredients": [
                            {
                                "id": 11333,
                                "name": "green pepper",
                                "localizedName": "green pepper",
                                "image": "green-pepper.jpg"
                            },
                            {
                                "id": 11979,
                                "name": "jalapeno pepper",
                                "localizedName": "jalapeno pepper",
                                "image": "jalapeno-pepper.png"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 11278,
                                "name": "okra",
                                "localizedName": "okra",
                                "image": "okra.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Mix in the cooked chicken and red wine vinegar. Continue to cook and stir 5 minutes.",
                        "ingredients": [
                            {
                                "id": 1022068,
                                "name": "red wine vinegar",
                                "localizedName": "red wine vinegar",
                                "image": "red-wine-vinegar.jpg"
                            },
                            {
                                "id": 5114,
                                "name": "cooked chicken",
                                "localizedName": "cooked chicken",
                                "image": "rotisserie-chicken.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 6,
                        "step": "Mix the cooked rice into the skillet. Season the mixture with chili powder, garlic salt, paprika, seasoned salt, cayenne pepper, and black pepper. Continue cooking until heated through.",
                        "ingredients": [
                            {
                                "id": 2031,
                                "name": "cayenne pepper",
                                "localizedName": "cayenne pepper",
                                "image": "chili-powder.jpg"
                            },
                            {
                                "id": 1042047,
                                "name": "seasoned salt",
                                "localizedName": "seasoned salt",
                                "image": "garlic-salt.jpg"
                            },
                            {
                                "id": 1002030,
                                "name": "black pepper",
                                "localizedName": "black pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 2009,
                                "name": "chili powder",
                                "localizedName": "chili powder",
                                "image": "chili-powder.jpg"
                            },
                            {
                                "id": 10220445,
                                "name": "cooked rice",
                                "localizedName": "cooked rice",
                                "image": "uncooked-white-rice.png"
                            },
                            {
                                "id": 1062047,
                                "name": "garlic salt",
                                "localizedName": "garlic salt",
                                "image": "garlic-salt.jpg"
                            },
                            {
                                "id": 2028,
                                "name": "paprika",
                                "localizedName": "paprika",
                                "image": "paprika.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null
    }

    return (
        <MainLayout>
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
        </MainLayout>
    )
}
