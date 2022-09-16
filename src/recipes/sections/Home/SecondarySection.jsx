import { ListOfRecipes } from "../../components"
import { useSearch } from "../../hooks/useSearch"

export const SecondarySection = () => {
    
    const { recipes: allRecipes, offSet: allOffSet, onNextPage: allNext, onPrevPage: allPrev } = useSearch({
        searchOffset: 1,
        numberOfResults: 8
    })


    return (
        <>
            {/* <ListOfRecipes title="Related to your likes"  more={true} numberOfRecipes = {4}/>
            <ListOfRecipes title="From your last search"  more={true} numberOfRecipes = {4}/> */}
            <ListOfRecipes title="All Recipes" pagination={true} recipes={allRecipes} next={allNext} prev={allPrev} offSet={allOffSet}/>
        </>
    )
}
