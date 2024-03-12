import styles from './Button.module.css'

export const Button = ({text}) => {

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <button className={styles.btn} onClick={handleClick}>{text}</button>
    )
}
