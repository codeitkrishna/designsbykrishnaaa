import styles from './contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contactMain}>
            <div className={styles.socials}>
                <div className={styles.socialsContent}>
                    <div className={styles.title}>Have a project in mind?</div>
                    <div className={styles.subtitle}>Let's catch up</div>
                    <hr className={styles.socialDivider} />
                    <div className={styles.buttonContainer}>
                        <a href="mailto:mailittokrishnagupta@gmail.com" className={styles.emailButton}>
                            Get in touch
                        </a>
                        <div className={styles.socialButtons}>
                            <a href="#" className={styles.socialLink}>Instagram</a>
                            <a href="#" className={styles.socialLink}>LinkedIn</a>
                            <a href="#" className={styles.socialLink}>Behance</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.allWork}>
                <div className={styles.workContent}>
                    <div className={styles.workTitle}>View all work</div>
                    <div className={styles.workCategories}>
                        <div className={styles.categoryWrapper}>
                            <button className={styles.categoryButton}>Graphic Design</button>
                            <span><div className={styles.arrow}>

                                <img src="../../assets/images/arrow.png" alt="arrow" />

                            </div>
                            </span>
                        </div>
                        <div className={styles.categoryWrapper}>
                            <button className={styles.categoryButton}>UI/UX Design</button>
                            <span><div className={styles.arrow}>

                                <img src="../../assets/images/arrow.png" alt="arrow" />

                            </div></span>
                        </div>
                        <div className={styles.categoryWrapper}>
                            <button className={styles.categoryButton}>Case Studies</button>
                            <span><div className={styles.arrow}>

                                <img src='../../assets/images/arrow.png' alt="arrow" />

                            </div></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;