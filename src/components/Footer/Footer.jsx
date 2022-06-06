import React from "react";
import styles from './Footer.module.css'
import logo from '../../assets/pufi-logo-light.png'
import garantia from '../../assets/garantia.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.cols}>
                    <img src={logo} alt='Pufi logo' />
                </div>

                <div className={styles.cols}>
                    <ul>
                        <li>Pufi rain</li>
                        <li>Pufi puff</li>
                        <li>Pufi cart</li>
                        <li>Pufi nap</li>
                    </ul>
                </div>

                <div className={styles.cols}>
                    <ul>
                        <li>Contacto</li>
                        <li>Ayuda</li>
                        <li>Cómo comprar</li>
                        <li>Términos y condiciones</li>
                    </ul>
                </div>

                <div className={styles.cols}>
                    Compra 100% segura
                    <br />
                    <img src={garantia} alt='Garantia Pufi' />
                </div>

                <div className={styles.cols}>
                    Seguinos en 
                    <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
                    <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                    <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                </div>
            </div>
        </>
    )
}

export default Footer