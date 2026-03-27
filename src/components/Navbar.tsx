import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#about">This is me</a></li>
                <li><a href="#work">My work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar