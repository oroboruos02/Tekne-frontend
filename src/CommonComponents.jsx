import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const CommonComponents = () => {

    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default CommonComponents