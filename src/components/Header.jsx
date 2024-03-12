import styles from './Header.module.css'

export const Header = () => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()

    const actualDate = `${months[month]} ${day}, ${year}`

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
