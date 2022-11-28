import styles from './Journal.module.css'

function Journal() {
  return (
    <div>
      <h1>Journal</h1>
      <form action="" className={styles.form}>
        <div>
          <label for='medical-journal-title' className='form-label'>Medical Changes</label>
          <br />
          <input type='text' className='form-label-input' placeholder='Enter title here.' />
          <br />
          <label for='medical-journal-textarea' className='form-label'>Details</label>
          <br />
          <textarea className='form-label-textarea' cols='45' rows='19' placeholder='Enter details here.'></textarea>
          <br />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Journal