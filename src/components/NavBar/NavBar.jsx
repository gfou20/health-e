import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>About</li>
        <li>Journel</li>
        <li>Contacts</li>
        <li>Appointments</li>
      </ul>
    </nav>
  )
}

export default NavBar