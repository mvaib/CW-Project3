
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import ProductDetails from "./ProductDetails"
function Main(){

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Home/>}/>
                <Route path="/:id" element={<ProductDetails/>}/>
            </Routes>
        </>
    )
}

export default Main