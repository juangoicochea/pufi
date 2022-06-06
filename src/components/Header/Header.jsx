import React from "react"
import styles from './Header.module.css'
import Navbar from "../Navbar/Navbar"
import logoPufi from '../../assets/pufi-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <>
            <div className={styles.container}>
                <img className={styles.logo} src={logoPufi} alt='Pufi logo' />
                <Navbar />
                <div className={styles.rightMenu}>
                    <ul>
                        <li>Mi cuenta <FontAwesomeIcon icon={faAngleDown} /></li>
                        <li>Mi compra</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header