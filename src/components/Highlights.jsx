import styles from './Highlights.module.css'

export const Highlights = ({actualMonth, year}) => {
    return (
        <section className={styles.highlightsCardWrapper}>
            <div className={styles.highlightsCardContainer}>
                <p>Total Balance</p>
                <div className={styles.highlightsCard}>
                    <header>
                        <h2>$240,399</h2>
                        <a href="#">All Accounts</a>
                    </header>
                    <div className={styles.creditCard}>
                        <div className={styles.creditCardInfo}>
                            <p>Account type</p>
                            <h4>Credit Card</h4>
                            <p>**** **** **** 5324</p>
                        </div>
                        <div className={styles.creditCardType}>
                            <img src="/mastercard-logo.svg" alt="Logo MasterCard" />
                            <h3>$25.000</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.highlightsCardContainer}>
                <p>Goals</p>
                <div className={styles.highlightsCard}>
                    <header>
                        <h2>$20,000 <img src="/edit-icon.svg" alt="Edit icon" /></h2>
                        <span>{`${actualMonth}, ${year}`}</span>
                    </header>
                </div>
            </div>
            <div className={styles.highlightsCardContainer}>
                <p>Upcoming Bills <a href="#">View All &gt;</a></p>
                <div className={styles.highlightsCard}>
                    
                </div>
            </div>
        </section>
    )
}
