import { useParams } from "react-router-dom"
import { ListOfRecipes, SearchBar } from "../components"
import { ListOfCategories } from "../components/ListOfCategories"
import { useSearch } from "../hooks"
import { MainLayout } from "../layouts/MainLayout"

export const Search = () => {

    const {query} = useParams()
    const { recipes: allRecipes, offSet: allOffSet, onNextPage: allNext, onPrevPage: allPrev } = useSearch({
        searchOffset: 0,
        numberOfResults: 20,
        searchQuery: query
    })

    const capitalize = (string) => {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    }

    return (
        <MainLayout>
            <div className="flex flex-row justify-center md:justify-start lg:justify-start xl:justify-start">
                <SearchBar/>
            </div>
            {
                query?
                <div className="mt-6">
                    <ListOfRecipes title={capitalize(query)} pagination={true} recipes={allRecipes} next={allNext} prev={allPrev} offSet={allOffSet}/>
                </div>
                :
                <div>
                    <ListOfCategories/>
                </div>
            }
        </MainLayout>
    )
}
