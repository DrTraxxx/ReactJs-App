import { useState } from "react"
import { registerUser } from "./authentication.tailwind/RegisterUser.tailwind"

const RegisterUser = () => {

    const [createUser, setCreateUser] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword:""
        })

    const inputHandler = (e) => setCreateUser(x => ({ ...x, [e.target.name]: e.target.value }))
    
    const loginUserHandler = (e) =>{
        e.preventDefault()
        console.log(createUser)
    }

    return (
        <div className="flex">
            <form  onSubmit={loginUserHandler} className="ml-40">
                <h1 className="mb-6 font-black text-3xl">Register </h1>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className={registerUser.label}>First name</label>
                        <input onChange={inputHandler} value={createUser.firstName} type="text" className={registerUser.input} name="firstName" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className={registerUser.label}>Last name</label>
                        <input onChange={inputHandler} value={createUser.lastName} type="text" className={registerUser.input} name="lastName" />
                    </div>
                    <div>
                        <label htmlFor="phone" className={registerUser.label}>Phone number</label>

                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className={registerUser.label}>Email address</label>
                    <input onChange={inputHandler} value={createUser.email} type="email" className={registerUser.input} name="email" placeholder="email@company.com" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className={registerUser.label}>Password</label>
                    <input onChange={inputHandler} value={createUser.password} type="password" className={registerUser.input} name="password" placeholder="•••••••••" />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className={registerUser.label}>Confirm password</label>
                    <input onChange={inputHandler} value={createUser.confirmPassword} type="password" className={registerUser.input} name="confirmPassword" placeholder="•••••••••" />
                </div>
                <button type="submit" className={registerUser.submitButton}>I`m all done</button>
            </form>
            <img src={registerUser.image} className="ml-80 w-1/4 h-1/5 h-auto rounded-full" alt="" />
        </div>
    )
}

export default RegisterUser