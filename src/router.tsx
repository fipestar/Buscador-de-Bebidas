import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import Favoritos from "./views/Favoritos";

export default function AppRouter(){
    return (
        <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} index/>
            <Route path="/favoritos" element={<Favoritos />} />
            </Route>
         </Routes>      
        </BrowserRouter>
    )
}