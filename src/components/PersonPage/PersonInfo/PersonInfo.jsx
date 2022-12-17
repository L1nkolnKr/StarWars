import React from 'react'

import styles from './PersonInfo.module.css'

const PersonInfo = ({personInfo}) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
          {personInfo.map(({title, data} )=>(
            data && (
               <li key={title} className={styles.list__item}>
                  <span className={styles.item__title}>{title}</span>: {data}
                </li>
            )
          ))}
      </ul>
    </div>
  )
}

export default PersonInfo