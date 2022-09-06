import { MainLayout } from '../layouts/MainLayout'
import { MainSection } from '../sections'
import { SecondarySection } from '../sections/Home/SecondarySection'

export const Home = () => {
    return (
        <MainLayout>
            <MainSection />
            <SecondarySection/>
        </MainLayout>
    )
}
