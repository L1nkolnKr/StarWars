import React from 'react'
import { Link } from 'react-router-dom'
import UiButton from '../../Ui/UiButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({getResours, prevPage, nextPage, counterPage}) => {
    const handlerChangeNext = () => getResours(nextPage)
    const handlerChangePrev = () => getResours(prevPage)
    return (
    <div className={styles.container}>
        <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
            <UiButton 
                text="prev"
                onClick={handlerChangePrev}
                disabled={!prevPage}
            />
        </Link>
        <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
            <UiButton
                text="next"
                onClick={handlerChangeNext}
                disabled={!nextPage}
            />
        </Link>
    </div>
  )
}

export default PeopleNavigation