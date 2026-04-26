import { useEffect, useRef } from 'react'
import profilbild from '../assets/profilbild.jpeg'
import styles from './About.module.css'

const About = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible)
                }
            },
            { threshold: 0.15 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.about} id="about" ref={sectionRef}>
            <div className={styles.leftCol}>
                <h1 className={styles.helloText}>Hello,</h1>

                <div className={styles.boxes}>
                    <div className={styles.topBox}>
                        <h2>I'm Nathalie Fredriksson</h2>
                    </div>

                    <div className={styles.bottomBox}>
                        <p>
                            I'm a 26 year old Web Developer and big nature lover. I did my studies at Mittuniversitetet in Sundsvall, Sweden.
                        </p>
                        <p>
                            On this page you will find some of my works.
                        </p>
                    </div>
                </div>
            </div>

            <img src={profilbild} alt="Bild på en tjej i midsommarkrans som plockar lupiner." />
        </section>
    )
}

export default About
