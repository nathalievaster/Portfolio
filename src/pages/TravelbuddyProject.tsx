import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './TravelBuddyProject.module.css'
import travelbuddy from '../assets/travelbuddy.png'
import travelbuddy2 from '../assets/travelbuddynews.png'
import travelbuddy3 from '../assets/travelbuddytravels.png'

const images = [travelbuddy, travelbuddy2, travelbuddy3]

const tech = [
    'WordPress',
    'Custom Theme (PHP)',
    'Advanced Custom Fields (ACF)',
    'Custom Post Types',
    'JavaScript',
    'Polylang',
    'Yoast SEO',
    'WooCommerce',
    'VPS (Ubuntu / Hostup)',
]

const highlights = [
    {
        title: 'Custom WordPress theme',
        desc: 'A static HTML/CSS/JS prototype was built first and then converted into a WordPress theme, making the transition smoother and the structure easier to manage.',
    },
    {
        title: 'Advanced Custom Fields',
        desc: 'ACF is used throughout the project to manage all content flexibly from the WordPress admin — keeping templates free of hardcoded content and easy to maintain without coding knowledge.',
    },
    {
        title: 'Custom Post Type — Trips',
        desc: 'Trips are handled as a custom post type with list and detail views, combined with ACF fields for destination, trip type and duration. This enables dynamic filtering without page reloads.',
    },
    {
        title: 'Client-side filtering',
        desc: 'ACF values are printed as data attributes in the HTML markup. JavaScript then compares the user\'s filter selections with these attributes to show or hide trips dynamically.',
    },
    {
        title: 'Multilingual support',
        desc: 'Polylang was used to add language support. The homepage has both a Swedish and an English version, connected via the plugin, with separate URLs and SEO settings for each.',
    },
    {
        title: 'WooCommerce integration',
        desc: 'Trips are linked to WooCommerce products via an ACF Post Object field, demonstrating how the site could be extended with booking functionality in a future phase.',
    },
]

const TravelBuddyProject = () => {
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
                    <h1 className={styles.title}>TravelBuddy</h1>
                    <p className={styles.subtitle}>
                        A fictional travel website built as a custom WordPress theme, featuring dynamic trip filtering, multilingual support and WooCommerce integration.
                    </p>
                    <div className={styles.heroLinks}>
                        <a
                            href="http://64.112.127.70/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnPrimary}
                        >
                            Visit the website ↗
                        </a>
                        <a
                            href="https://github.com/nathalievaster/Travelbuddy-tema"
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
                        alt="Screenshot from TravelBuddy"
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

export default TravelBuddyProject
