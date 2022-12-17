import React from 'react'

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({personName, personPhoto}) => {
  return (
    <div className={styles.container}>
        <img src={personPhoto} alt={personName} className={styles.photo}/>
    </div>
  )
}

export default PersonPhoto