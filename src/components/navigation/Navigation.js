import {useState} from 'react'
import ThemeToogle from '../navigation/ThemeToogle'
import Login from './Login'
import {BsPersonCircle} from 'react-icons/bs'

const Navigation = () => {

    const[isDisplayed , setIsDisplayed] = useState(false);

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-500">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <h1>Pet-Doc</h1>
                <ThemeToogle/>
                <div className="flex md:order-2">
                    <button onClick={() => setIsDisplayed(x =>!x)} className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600" data-modal-toggle="authentication-modal">
                        <BsPersonCircle className="w-10 h-10"/>
                    </button>
                    { isDisplayed && <Login  dispayHandler ={setIsDisplayed}/>}
                </div>
            </div>
        </nav>
    )
} 

export default Navigation