import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Banner from "./components/Banner"

const CommonComponents = () => {

    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default CommonComponents