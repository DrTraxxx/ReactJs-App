import { useState } from "react";
import useDark from "../../hooks/useDark"
import {BsSunFill,BsMoonStarsFill} from 'react-icons/bs'

const ThemeToogle = () => {
    const [colorTheme,setTheme] = useDark();
    const [darkMode,setDarkMode] = useState(colorTheme ==='light'? true: false) 

    const ToogleDarkMode = () => {
        setTheme(colorTheme);
        setDarkMode(!darkMode);
    } 

    return (
        <>
            <div className="hidden relative mr-3 md:mr-0 md:block">
                <button onClick={ToogleDarkMode}>
                    {darkMode ? <BsMoonStarsFill /> : <BsSunFill />}
                </button>
            </div>
        </>
    )
} 

export default ThemeToogle