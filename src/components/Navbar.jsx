import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
function Navbar() {
    return <nav className=' mb-20 flex items-center  justify-between py-6 '>
        <div className="flex flex-shrink-0 items-center">
            <img className=" mx-2 w-10 " src={logo} alt="logo" />
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagramSquare />
            <FaXTwitter />
        </div>
    </nav>

}

export default Navbar