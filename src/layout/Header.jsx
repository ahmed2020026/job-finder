import { Moon, Sun } from "lucide-react"
import Logo from "../assets/images/briefcase.svg"
import { useEffect, useState } from "react"

const Header = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="flex justify-start gap-2 items-center">
                    <img
                        src={Logo}
                        alt="logo"
                        className="bg-dark p-1.5 rounded-md"
                    />

                    <h1 className="font-black text-xl text-dark dark:text-white">
                        Job<span className="text-primary">Finder</span>
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Header