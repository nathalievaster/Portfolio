import profilbild from '../assets/profilbild.jpeg'
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles["about-boxes"]}>
                <div className={`${styles["about-box"]} ${styles.top}`}>
                    <h2>Hello, I’m Nathalie Fredriksson!</h2>
                </div>

                <div className={`${styles["about-box"]} ${styles.bottom}`}>
                    <p>
                        I'm a 26 year old Web Developer and big nature lover. I did my studies at Mittuniversitetet in Sundsvall, Sweden.
                    </p>
                    <p>
                        On this page you will find some of my works.
                    </p>
                </div>
            </div>

            <img src={profilbild} alt="Bild på en tjej i midsommarkrans som plockar lupiner." />
        </section >
    )
}

export default About