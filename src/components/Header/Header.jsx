import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={StyleSheet.container}>
        <ul className={styles.list__container}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/people/?page=1">People</NavLink></li>
            <li><NavLink to="*">NotFound</NavLink></li>
        </ul>
    </div>
  )
}

export default Header