import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <h1>About Health-E</h1>
      <img src='./images/woman-two.png' alt='smiling woman' />
      <p>Health-E is an organization focused with one goal in mind: putting the member first!</p>
      <p>The member is able to see what new appointments have been made or any that have been missed or marked as attended. All emergency as well as physician contacts are located in one place, making it easier to keep track of important information. The member is also able to keep a medical journal, allowing them the ability to keep a record of any changes in their health.</p>
      <p>Only during a medical emergency will a physician have access to a members journal, in case any medical issues have been mentioned unknwon to the physician. Health-E takes member data seriously and ensures all medical information remain secure.</p>
    </div>
  )
}

export default About