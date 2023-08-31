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
<h3>Loading</h3>
    </div>
  )
}
export default Loading;