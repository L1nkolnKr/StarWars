import React from 'react'
import cn from 'classnames'

import styles from './UiButton.module.css'

const UiButton = ({text, onClick, disabled, theme="dark"}) => {
  return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={cn(styles.button, styles[theme])}
            >
            {text}
        </button>
  )
}

export default UiButton