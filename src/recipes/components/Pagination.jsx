import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const Pagination = ({prev, next, offSet}) => {
    return (
        <nav className="h-14 w-fit rounded-lg border-background border-2 flex flex-row items-stretch">
            <button disabled={offSet == 0} className="h-full w-12 p-3 border-r-2 border-background text-primary hover:text-primary hover:font-bold hover:bg-[#ff526f2a] disabled:text-background disabled:hover:bg-[#ff526f00]" onClick={prev}>
                <ArrowLeftIcon className="w-6"/>
            </button>

            <button className="h-full w-12 p-3  text-primary hover:text-primary hover:font-bold hover:bg-[#ff526f2a]" onClick={next}>
                <ArrowRightIcon className="w-6"/>
            </button>
        </nav>
    )
}
