import { useState } from 'react'
import { Form } from '../components/Form'

export const Login = () => {

    const [login, setLogin] = useState(true)
    const [accountCreation, setAccountCreation] = useState(false)

    const handleLogin = () => {
        setAccountCreation(false)
        setLogin(true)
    }

    const handleAccountCreation = () => {
        setLogin(false)
        setAccountCreation(true)
    }

    return (
        <>
            <img src="./logo.svg" alt="Fine Bank IO logo" className='logo'/>
            <Form 
                isLogin={login}
                isAccountCreation={accountCreation}
                handleLogin={handleLogin}
                handleAccountCreation={handleAccountCreation}/>
        </>
    )
}
