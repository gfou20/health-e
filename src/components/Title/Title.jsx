import { Link } from 'react-router-dom'
import styles from './Title.module.css'

function  Title() {
  return (
    <>
      <Link to='/'><h1 className={styles.title}>Health-E</h1></Link>
    </>
  )
}

export default Title