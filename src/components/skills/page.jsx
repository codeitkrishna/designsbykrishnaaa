import styles from './skills.module.css'

const Skills = () => {
    return (
        <div className={styles.skillsMain}>
            <div className={styles.skill}>
                <div className={styles.title}>
                    UI/UX Designing
                </div>
                <div className={styles.description}>
                    Thinking Outside the Box <br />  Designing with Heart (and Data) <br />  User-Centric Approach
                </div>
                <div className={styles.container}>
                    <div className={styles.keyword}>Figma</div>
                    <div className={styles.keyword}>Framer</div>
                    <div className={styles.keyword}>Adobe XD</div>
                </div>
            </div>

            <div className={styles.skill}>
                <div className={styles.title}>
                    Graphic Designing
                </div>
                <div className={styles.description}>
                Visual Storytelling  <br />  Conceptual Development  <br />  Engaging Designs
                </div>
                <div className={styles.container}>
                    <div className={styles.keyword}>Photoshop</div>
                    <div className={styles.keyword}>Illustrator</div>
                    {/* <div className={styles.keyword}>InDesign</div> */}
                </div>
            </div>

            <div className={styles.skill}>
                <div className={styles.title}>
                    Branding & Identity
                </div>
                <div className={styles.description}>
                Identity Creation <br /> Strategic Development <br /> Creative Resonance 
                </div>
                <div className={styles.container}>
                    <div className={styles.keyword}>Strategy</div>
                    <div className={styles.keyword}>Guidelines</div>
                    <div className={styles.keyword}>Identity</div>
                </div>
            </div>

            <div className={styles.cta}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaTitle}>Have a project in mind?</div>
                    <div className={styles.ctaSubtitle}>Let's catch up</div>
                    <a href="mailto:mailittokrishnagupta@gmail.com" className={styles.ctaButton}>
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skills;