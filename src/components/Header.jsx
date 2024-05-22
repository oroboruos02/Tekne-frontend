import React from "react"
import Menu from "./Menu"

const Header = () => {
    return(
        <header className="fixed inset-x-0 top-0 z-50 bg-[#111827] shadow-md">
            <Menu />
        </header>
    )
}

export default Header