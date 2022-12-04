import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({getResours, prevPage, nextPage, counterPage}) => {
    const handlerChangeNext = () => getResours(nextPage)
    const handlerChangePrev = () => getResours(prevPage)
    return (
    <div>
        <Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
            <button 
                onClick={handlerChangePrev} 
                disabled={!prevPage}
                className={styles.buttons}
                >
                Prev
            </button>
        </Link>
        <Link to={`/people/?page=${counterPage+1}`} className={styles.link}>
            <button 
                onClick={handlerChangeNext} 
                disabled={!nextPage}
                className={styles.buttons}
                >
                Next
            </button>
        </Link>
    </div>
  )
}

export default PeopleNavigation