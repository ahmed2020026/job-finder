import { Moon, Sun } from "lucide-react"
import Logo from "../assets/images/briefcase.svg"
import { useEffect, useState } from "react"

const Header = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    )
    const changeTheme = () => {
        setIsDark(prev => !prev)
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)

        localStorage.setItem("theme", isDark ? "dark" : "light")
    }, [isDark])

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

                <button
                    aria-label="themes"
                    onClick={changeTheme}
                    className="text-dark dark:text-gray-200 hover:text-primary cursor-pointer"
                >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </div>
    )
}

export default Header