import styles from './HorizontalLine.module.css'

export const HorizontalLine = ({isLogin}) => {
    return (
        <div className={styles.horizontalLineWrapper}>
            <hr />
            <span>Or sign {isLogin ? 'in' : 'up'} with</span>
        </div>
    )
}
