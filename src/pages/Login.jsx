import { useState } from 'react'
import { Form } from '../components/Form'

export const Login = () => {

    const [login, setLogin] = useState(true)
    const [accountCreation, setAccountCreation] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)

    const handleLogin = () => {
        setAccountCreation(false)
        setForgotPassword(false)
        setLogin(true)
    }

    const handleAccountCreation = () => {
        setLogin(false)
        setForgotPassword(false)
        setAccountCreation(true)
    }

    const handleForgotPassword = () => {
        setLogin(false)
        setAccountCreation(false)
        setForgotPassword(true)
    }

    return (
        <>
            <img src="./logo.svg" alt="Fine Bank IO logo" className='logo'/>
            <Form 
                isLogin={login}
                isAccountCreation={accountCreation}
                isForgotPassword={forgotPassword}
                handleLogin={handleLogin}
                handleAccountCreation={handleAccountCreation}
                handleForgotPassword={handleForgotPassword}
            />
        </>
    )
}
