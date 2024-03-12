import { Button } from './Button'
import { HorizontalLine } from './HorizontalLine'
import { GoogleButton } from './GoogleButton'

import styles from './Form.module.css'

export const Form = ({  isLogin, isAccountCreation, isForgotPassword, 
                        handleLogin,handleAccountCreation, handleForgotPassword
                    }) => {

    return (
        <form className={styles.form}>
            {isAccountCreation &&
                <>
                    <h1>Create an account</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required/>
                </>
            }
            {isForgotPassword &&
                <>
                    <h1>Forgot Password</h1>
                    <p className={styles.paragraph}>Enter your email address to get the password reset link.</p>
                </>
            }
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" required/>
            
            {!isForgotPassword &&
                <>
                    <div className={styles.passwordLabel}>
                        <label htmlFor="password">Password</label>
                        {isLogin && <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>}
                    </div>
                    <input type="password" name="password" id="password" required/>
                </>
            }

            {isLogin && 
                <div className={styles.keepLogged}>
                    <input type="checkbox"/>
                    Keep me signed in
                </div>
            }
            {isAccountCreation &&
                <span className={styles.terms}>By continuing, you agree to our terms and services</span>
            }
            {isForgotPassword ? 
                <Button text={'Password Reset'}/>:
                <>
                    <Button text={'Login'}/>
                    <HorizontalLine />
                    <GoogleButton />
                </>
            }

            { isLogin &&
                <a href="#" className={styles.createAccount} onClick={handleAccountCreation}>Create an account</a>
            }
            {isAccountCreation &&
                <div className={styles.haveAccountWrapper}>
                    <span>Already have an account?</span>
                    <a href="#" className={styles.haveAccount} onClick={handleLogin}>Sign in here</a>
                </div>
            }
            {isForgotPassword &&
                <div className={styles.haveAccountWrapper}>
                    <a href="#" className={styles.haveAccount} onClick={handleLogin}>Back to login</a>
                </div>
            } 
        </form>
    )
}
