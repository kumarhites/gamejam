import styles from './Header.module.css'

import {RiGameFill} from 'react-icons/ri'

function Header() {
  return (
    <div className={styles.header}>
      <h1><RiGameFill size={30} style={{color: "yellow"}}/></h1>
      <h1 className={styles.title}>GameJam</h1>
    </div>
  )
}

export default Header