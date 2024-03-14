import styles from './Header.module.css'

export const Header = ({actualDate}) => {

    return (
        <header className={styles.header}>
            <div className={styles.welcomeMessage}>
                <h1>Hello, Daniel</h1>
                <span>{actualDate}</span>
            </div>
            <div className={styles.headerUtilities}>
                <img src="/notification-icon.svg" alt="notification icon" className={styles.notificationsIcon}/>
                <div className={styles.searchBarWrapper}>
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        className={styles.searchBar}
                        placeholder='Search here'
                    />
                    <img src="/search-icon.svg" alt="" />
                </div>
            </div>
        </header>
    )
}
