import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>About</li>
        <li>Appointments</li>
        <li>Journel</li>
        <li>Contacts</li>
      </ul>
    </nav>
  )
}

export default NavBar