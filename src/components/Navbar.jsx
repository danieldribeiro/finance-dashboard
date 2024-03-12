import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <section className={styles.navbar}>
            <img src="/white-logo.svg" alt="" />
            <nav>
                <a href="#"><img src="/overview-icon.svg" alt="Overview icon"/>Overview</a>
                <a href="#"><img src="/balances-icon.svg" alt="Balances icon"/>Balances</a>
                <a href="#"><img src="/transactions-icon.svg" alt="Transactions icon"/>Transactions</a>
                <a href="#"><img src="/bills-icon.svg" alt="Bills icon"/>Bills</a>
                <a href="#"><img src="/expenses-icon.svg" alt="Expenses icon"/>Expenses</a>
                <a href="#"><img src="/goals-icon.svg" alt="Goals icon"/>Goals</a>
                <a href="#"><img src="/settings-icon.svg" alt="Settings icon"/>Settings</a>
                <a href="#"><img src="/logout-icon.svg" alt="Logout icon"/>Logout</a>
            </nav>
            <hr />
            <div className={styles.profileWrapper}>
                <img src="/profile-picture.jpeg" alt="profile picture" className={styles.profilePicture}/>
                <div className={styles.profileNameWrapper}>
                    <h2>Daniel Ribeiro</h2>
                    <span>View profile</span>
                </div>
                <img src="/options-icon.svg" alt="" className={styles.optionsIcon}/>
            </div>
        </section>
    )
}
