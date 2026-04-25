import { useEffect, useRef, useState } from 'react'
import styles from './MyWork.module.css'
import gymtracker from '../assets/gymtracker.png'
import travelbuddy from '../assets/travelbuddy.png'

const MyWork = () => {
    const projectsRef = useRef<(HTMLDivElement | null)[]>([])
    const [isScrollStopped, setIsScrollStopped] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.active)
                    } else {
                        entry.target.classList.remove(styles.active)
                    }
                })
            },
            { threshold: 0.5 }
        )

        projectsRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        let timer: number

        const handleScroll = () => {
            setIsScrollStopped(false)

            window.clearTimeout(timer)

            timer = window.setTimeout(() => {
                setIsScrollStopped(true)
            }, 250)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.clearTimeout(timer)
        }
    }, [])

    return (
        <section className={styles.work} id="work">
            <div className={styles.timeline}></div>

            <div className={`${styles.circle} ${isScrollStopped ? styles.circleActive : ''}`}></div>

            <div
                ref={(el) => {
                    projectsRef.current[0] = el
                }}
                className={`${styles.project} ${styles.left}`}
            >
                <div className={styles.content}>
                    <h3>GymTracker .NET application</h3>
                    <p>Gymtracker is a .NET application designed to help users track their gym workouts and progress.</p>
                    <button className={styles.button}>Visit the website</button>
                    <button className={styles.button}>Read more</button>
                </div>
                <img src={gymtracker} alt="Screenshot from the GymTracker app" />
            </div>

            <div
                ref={(el) => {
                    projectsRef.current[1] = el
                }}
                className={`${styles.project} ${styles.right}`}
            >
                <img src={travelbuddy} alt="Screenshot from the TravelBuddy app" />
                <div className={styles.content}>
                    <h3>TravelBuddy Wordpress application</h3>
                    <p>TravelBuddy is a Wordpress application designed to help users plan and organize their travel itineraries.</p>
                    <p>It uses a self-developed theme.</p>
                    <button className={styles.button}>Visit the website</button>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </section>
    )
}

export default MyWork