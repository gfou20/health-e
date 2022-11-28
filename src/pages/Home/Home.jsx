import styles from './Home.module.css'

function Home() {
  return (
    <>
      <div>
        <h1>Welcome to Health-E</h1>
        <img src='./images/women.png' alt='happy woman with hands up' className={styles.img} />
        <p>Here at Health-E, our focus is giving our members the tools necessary to staying organized regarding all of their healthcare needs. Health-E offers emergency contact information, personal medical journals and scheduling appointments with any of your medical providers.</p>
        <hr />
        <p>To learn more about Health-E, click below!</p>
        <button>More about Health-E</button>
      </div>
    </>
  )
}

export default Home