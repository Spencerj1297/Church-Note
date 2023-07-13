import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <div className="hidden md:block h-16 bg-gray-800 flex items-center justify-center p-4 px-4">
            <nav className="flex items-center justify-center">
        <Link to="/" className="text-white text-lg font-semibold mx-4">
          Home
        </Link>
        <Link to="/about" className="text-white text-lg font-semibold mx-4">
          About
        </Link>
        <Link to="/signup" className="text-white text-lg font-semibold mx-4">
          Sign up
        </Link>
      </nav>
        </div>
    )
}

export default Footer