import React from 'react'
import styles from "./load.module.css"


const Loading = () => {
  return (
    <div>
        <div className={styles.loading}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<h3 className='text-lg font-semibold text-center animate-blink'>Loading</h3>
    </div>
  )
}
export default Loading;