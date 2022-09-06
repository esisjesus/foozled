import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export const Pagination = () => {
    return (
        <nav className="h-14 w-fit rounded-lg border-background border-2 flex flex-row items-stretch">
            <button className="h-full w-12 p-3 border-r-2 border-background text-primary">
                <ArrowLeftIcon className="w-6"/>
            </button>

            <button className="h-full w-12 border-r-2 border-background text-primary font-bold bg-[#ff526f2a]">
                1
            </button>
            <button className="h-full w-12 border-r-2 border-background">
                2
            </button>
            <button className="h-full w-12 border-r-2 border-background">
                3
            </button>

            <button className="h-full w-12 border-r-2 border-background">
                ...
            </button>

            <button className="h-full w-12 border-r-2 border-background">
                29
            </button>

            <button className="h-full w-12 p-3  text-primary">
                <ArrowRightIcon className="w-6"/>
            </button>
        </nav>
    )
}
