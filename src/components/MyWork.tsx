import styles from './MyWork.module.css'
import profilbild from '../assets/profilbild.jpeg'
import gymtracker from '../assets/gymtracker.png'

const MyWork = () => {
    return (
        <section className={styles.work} id="work">
            <div className={styles.timeline}></div>

            <div className={`${styles.project} ${styles.left}`}>
                <div className={styles.circle}></div>
                <div className={styles.content}>
                    <h2>GymTracker .NET application</h2>
                    <p>Gymtracker is a .NET application designed to help users track their gym workouts and progress.</p>
                    <button className={styles.button}>Visit the website</button>
                </div>
                <img src={gymtracker} alt="Screenshot from the GymTracker app" />
            </div>

            <div className={`${styles.project} ${styles.right}`}>
                <img src={profilbild} alt="" />
                <div className={styles.content}>
                    <p>Bla bla bla...</p>
                    <button>Visit the website</button>
                </div>
            </div>
        </section>
    )
}

export default MyWork