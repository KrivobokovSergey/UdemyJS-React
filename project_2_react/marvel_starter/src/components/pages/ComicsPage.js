
import { Outlet, useOutlet } from "react-router-dom";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from '../appBanner/AppBanner';

const ComicsPage = () => {

    const outlet = useOutlet();

    return (
        <>
            <AppBanner/>
            {outlet? <Outlet/> : <ComicsList/>}
        </>
    )
}

export default ComicsPage;