import { FloatingContactButton } from "../components/atoms/FloatButton";
import RenderNavBar from "../components/molecules/RenderNavBar";
import AboutMe from "../components/organisms/AboutMe";
import TrainWithMe from "../components/organisms/TrainWithMe";
import { Home } from "../pages/public/Home";

const AppRoutes = () => {
    return (
        <>
            <RenderNavBar />
            <Home />
            <AboutMe />
            <TrainWithMe />
            <FloatingContactButton />
        </>
    )
}

export default AppRoutes;