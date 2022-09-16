import { MainLayout } from '../layouts'
import { MainSection } from '../sections/Home'
import { SecondarySection } from '../sections/Home/SecondarySection'

export const Home = () => {
    return (
        <MainLayout>
            <MainSection />
            <SecondarySection/>
        </MainLayout>
    )
}
