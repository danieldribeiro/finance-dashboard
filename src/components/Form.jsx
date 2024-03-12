import { Button } from './Button'
import { HorizontalLine } from './HorizontalLine'
import { GoogleButton } from './GoogleButton'

import styles from './Form.module.css'

export const Form = ({isLogin, isAccountCreation, isForgotPassword, handleLogin,handleAccountCreation}) => {
    return (
        <form className={styles.form}>
            {isAccountCreation &&
                <>
                    <h1>Create an account</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required/>
                </>
            }
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" required/>
            <div className={styles.passwordLabel}>
                <label htmlFor="password">Password</label>
                {isLogin && <a href="#">Forgot Password?</a>}
            </div>
            <input type="password" name="password" id="password" required/>
            {isAccountCreation ? 
                <span className={styles.terms}>By continuing, you agree to our terms and services</span> :
                <div className={styles.keepLogged}>
                    <input type="checkbox"/>
                    Keep me signed in
                </div>
            }
            <Button text={'Login'}/>
            <HorizontalLine />
            <GoogleButton />
            {isAccountCreation ?
                <div className={styles.haveAccountWrapper}>
                    <span>Already have an account?</span>
                    <a href="#" className={styles.haveAccount} onClick={handleLogin}>Sign in here</a>
                </div> :
                <a href="#" className={styles.createAccount} onClick={handleAccountCreation}>Create an account</a>
            }
        </form>
    )
}
