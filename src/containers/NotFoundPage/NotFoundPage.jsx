import React from 'react'
import { useLocation } from 'react-router'
import img from './img/404.jpeg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    let location = useLocation();

  return (
    <div>
        <img className={styles.img} src={img} alt="Not Found"/>
        <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </div>
  )
}

export default NotFoundPage