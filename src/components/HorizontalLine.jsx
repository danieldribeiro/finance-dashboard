import styles from './HorizontalLine.module.css'

export const HorizontalLine = () => {
    return (
        <div className={styles.horizontalLineWrapper}>
            <hr />
            <span>Or sign in with</span>
        </div>
    )
}
