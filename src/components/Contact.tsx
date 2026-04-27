import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.contact} id="contact" ref={sectionRef}>
            <h2>Let's create something together</h2>

            <hr className={styles.divider} />

            <p>
                I'm always open to new opportunities, collaborations or just a conversation.
                Whether you have a project in mind, a question, or just want to say hi -
                don't hesitate to reach out!
            </p>

            {/* Email */}
            <div className={`${styles.info} ${styles.floatingSymbols}`}>
                <span className={styles.symbol}>✉</span>
                <p>
                    <span className={styles.pulse} />
                    <strong>Email</strong>
                </p>
                <a href="mailto:nathalie@email.com">nfredriksson1@gmail.com</a>
            </div>

            {/* GitHub */}
            <div className={`${styles.info} ${styles.floatingSymbols}`}>
                <span className={styles.symbol}>{'</>'}</span>
                <p><strong>GitHub</strong></p>
                <a
                    href="https://github.com/nathalievaster"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/nathalievaster
                </a>
            </div>

            {/* LinkedIn */}
            <div className={`${styles.info} ${styles.floatingSymbols}`}>
                <span className={styles.symbol}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </span>
                <p><strong>LinkedIn</strong></p>
                <a
                    href="https://www.linkedin.com/in/nathalie-fredriksson-40a836395"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/nathalie-fredriksson-40a836395
                </a>
            </div>

            <p className={styles.footer}>Looking forward to hearing from you</p>
        </section>
    )
}

export default Contact
