import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
      <Link to='/about'><li>About</li></Link>
        <Link to='/journal'><li>Journal</li></Link>
        <Link to='/contacts'><li>Contacts</li></Link>
        <Link to='/appointments'><li>Appointments</li></Link>
      </ul>
    </nav>
  )
}

export default NavBar