import styles from './Highlights.module.css'

export const Highlights = () => {
    return (
        <section className={styles.highlightsCardWrapper}>
            <div className={styles.highlightsCardContainer}>
                <p>Total Balance</p>
                <div className={styles.highlightsCard}>
                    <header>
                        <h2>$240,399</h2>
                        <a href="#">All Accounts</a>
                    </header>
                </div>
            </div>
            <div className={styles.highlightsCardContainer}>
                <p>Goals <a href="#">View All &gt;</a></p>
                <div className={styles.highlightsCard}>
                    
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
