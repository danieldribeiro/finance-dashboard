import { Button } from './Button'

import styles from './Form.module.css'
import { HorizontalLine } from './HorizontalLine'

export const Form = () => {
    return (
        <form className={styles.form}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" required/>
            <div className={styles.passwordLabel}>
                <label htmlFor="password">Password</label>
                <a href="#">Forgot Password?</a>
            </div>
            <input type="password" name="password" id="password" required/>
            <div className={styles.keepLogged}>
                <input type="checkbox"/>
                Keep me signed in
            </div>
            <Button text={'Login'} backgroundColor='red'/>
            <HorizontalLine />
        </form>
    )
}
