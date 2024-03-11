import styles from './Button.module.css'

export const Button = ({text, backgroundColor}) => {

    const handleClick = (e) => {
        e.preventDefault()
    }

    const buttonStyle = {
        backgroundColor: backgroundColor // Usando a cor de fundo passada como prop
    }

    return (
        <button className={styles.btn} style={buttonStyle} onClick={handleClick}>{text}</button>
    )
}
