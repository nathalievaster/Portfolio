import { useEffect, useRef, useState } from 'react'
import styles from './MyWork.module.css'
import gymtracker from '../assets/gymtracker.png'
import gymtrackerWorkouts from '../assets/gymtrackerWorkouts.png'
import gymtrackerExercises from '../assets/gymtrackerExercises.png'
import travelbuddy from '../assets/travelbuddy.png'
import travelbuddytravels from '../assets/travelbuddytravels.png'
import travelbuddynews from '../assets/travelbuddynews.png'
import { Link } from 'react-router-dom'

const gymImages = [gymtracker, gymtrackerWorkouts, gymtrackerExercises]
const travelImages = [travelbuddy, travelbuddytravels, travelbuddynews]

const Slideshow = ({ images, alt }: { images: string[], alt: string }) => {
    const [current, setCurrent] = useState(0)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true)
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % images.length)
                setFading(false)
            }, 400) // fade-tid
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className={styles.slideshow}>
            <img
                src={images[current]}
                alt={alt}
                className={`${styles.slide} ${fading ? styles.fadeOut : styles.fadeIn}`}
            />
            <div className={styles.dots}>
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    )
}

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
                ref={(el) => { projectsRef.current[0] = el }}
                className={`${styles.project} ${styles.left}`}
            >
                <div className={styles.content}>
                    <h3>GymTracker .NET application</h3>
                    <p>Gymtracker is a .NET application designed to help users track their gym workouts and progress.</p>
                    <a
                        href="https://gymtracker-app.azurewebsites.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        Visit the website ↗
                    </a>
                    <Link to="/projects/gymtracker" className={styles.button}>
                        Read more →
                    </Link>
                </div>
                <Slideshow images={gymImages} alt="Screenshot from the GymTracker app" />
            </div>

            <div
                ref={(el) => { projectsRef.current[1] = el }}
                className={`${styles.project} ${styles.right}`}
            >
                <Slideshow images={travelImages} alt="Screenshot from the TravelBuddy app" />
                <div className={styles.content}>
                    <h3>TravelBuddy Wordpress application</h3>
                    <p>TravelBuddy is a Wordpress application designed to help users plan and organize their travel itineraries.</p>
                    <p>It uses a self-developed theme.</p>
                    <a
                        href="http://64.112.127.70/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        Visit the website ↗
                    </a>
                    <button className={styles.button}>Read more →</button>
                </div>
            </div>
        </section>
    )
}

export default MyWork
