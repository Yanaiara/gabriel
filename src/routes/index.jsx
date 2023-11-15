import { Home } from "../pages/public/Home";
import RenderNavBar from "../components/molecules/RenderNavBar";
import { FloatingContactButton } from "../components/atoms/FloatButton";
import AboutMe from "../components/organisms/AboutMe";

const AppRoutes = () => {
    return (
        <>
            <RenderNavBar />
            <Home />
            <AboutMe />
            <FloatingContactButton />
        </>
    )
}

export default AppRoutes;