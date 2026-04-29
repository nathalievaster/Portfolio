import { HashLink } from 'react-router-hash-link'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><HashLink smooth to="/#about">This is me</HashLink></li>
                <li><HashLink smooth to="/#work">My work</HashLink></li>
                <li><HashLink smooth to="/#contact">Contact</HashLink></li>
            </ul>
        </nav>
    )
}

export default Navbar