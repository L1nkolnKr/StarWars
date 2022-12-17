import React, { useEffect, useState } from 'react' 

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-black.svg'
import loaderBlue from './img/loader-black.svg'

import styles from './UiLoading.module.css'

const UiLoading = ({theme='blue'}) => {
  const [ loaderIcon, setLoaderIcon] = useState(null)

  useEffect(() =>{
    switch (theme) {
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'white': setLoaderIcon(loaderWhite); break;
      case 'blue': setLoaderIcon(loaderBlue); break;
    
      default:setLoaderIcon(loaderBlack);
    }
  },[])
  return (
    <img
        className={styles.loader}
        src={loaderIcon}
        alt="loader"
    />
  )
}

export default UiLoading