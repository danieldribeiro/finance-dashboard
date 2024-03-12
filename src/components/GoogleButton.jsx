import styles from './GoogleButton.module.css'

export const GoogleButton = () => {

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <button className={styles.btn} onClick={handleClick}>
            <img src="/google-logo.svg" alt="Google logo" />
            <span>Continue with Google</span>
        </button>
    )
}
