import { Navigate, Route, Routes } from "react-router-dom";

import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="login" element={ <LoginPage/> } />
            </Routes>
        </>
    )
}
