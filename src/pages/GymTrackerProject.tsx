import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './GymTrackerProject.module.css'
import gymtracker from '../assets/gymtracker.png'
import gymtrackerWorkouts from '../assets/gymtrackerWorkouts.png'
import gymtrackerExercises from '../assets/gymtrackerExercises.png'

const images = [gymtracker, gymtrackerWorkouts, gymtrackerExercises]

const tech = [
    'Blazor Web App (.NET)',
    'Entity Framework Core',
    'ASP.NET Core Identity',
    'PostgreSQL',
    'Chart.js',
    'Azure App Service',
    'PWA',
]

const highlights = [
    {
        title: 'Role-based access control',
        desc: 'Admins manage the global exercise library while regular users can create and edit their own exercises — all handled through ASP.NET Core Identity.',
    },
    {
        title: 'Dashboard & statistics',
        desc: 'A personal dashboard shows aggregated training data — total sessions, exercises, sets, volume, and a weekly workout chart rendered with Chart.js via JavaScript Interop.',
    },
    {
        title: 'Media uploads',
        desc: 'Users can attach progress media to individual exercises. Blazor\'s native InputFile component was hidden and replaced with a custom-styled button triggering the file picker via JavaScript.',
    },
    {
        title: 'Workout templates',
        desc: 'Sessions can be saved as templates using a boolean flag on the WorkoutSession model, keeping the implementation lightweight without requiring separate database tables.',
    },
    {
        title: 'PWA support',
        desc: 'The app ships with a service worker, manifest and offline support — and an install button in the footer as a complement to the browser\'s built-in install prompt.',
    },
]

const GymTrackerProject = () => {
    const [current, setCurrent] = useState(0)
    const [fading, setFading] = useState(false)
    const sectionsRef = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true)
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % images.length)
                setFading(false)
            }, 500)
        }, 8000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                    }
                })
            },
            { threshold: 0.1 }
        )
        sectionsRef.current.forEach(el => { if (el) observer.observe(el) })
        return () => observer.disconnect()
    }, [])

    return (
        <div className={styles.page}>

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <Link to="/" className={styles.back}>← Back</Link>
                    <h1 className={styles.title}>GymTracker</h1>
                    <p className={styles.subtitle}>
                        A full-stack workout tracking application built with Blazor Web App and PostgreSQL, deployed on Azure App Service.
                    </p>
                    <div className={styles.heroLinks}>
                        <a
                            href="https://gymtracker-app.azurewebsites.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnPrimary}
                        >
                            Visit the website ↗
                        </a>
                        <a
                            href="https://github.com/nathalievaster/gymtracker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnSecondary}
                        >
                            GitHub →
                        </a>
                    </div>
                </div>

                {/* Slideshow */}
                <div className={styles.slideshow}>
                    <img
                        src={images[current]}
                        alt="Screenshot from GymTracker"
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
            </section>

            {/* Tech stack */}
            <section
                className={styles.section}
                ref={el => { sectionsRef.current[0] = el }}
            >
                <h2 className={styles.sectionTitle}>Tech stack</h2>
                <ul className={styles.techList}>
                    {tech.map(t => (
                        <li key={t} className={styles.techItem}>{t}</li>
                    ))}
                </ul>
            </section>

            {/* Highlights */}
            <section
                className={styles.section}
                ref={el => { sectionsRef.current[1] = el }}
            >
                <h2 className={styles.sectionTitle}>Highlights</h2>
                <div className={styles.cards}>
                    {highlights.map(h => (
                        <div key={h.title} className={styles.card}>
                            <h3>{h.title}</h3>
                            <p>{h.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default GymTrackerProject
