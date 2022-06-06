import React from "react";
import styles from './Button.module.css'

const Button = ( { name, image }) => {

    return (
        <>
            <li className={styles.buttonLi}>
                <img className={styles.icon} src={image} alt={`${name} icon`} />
                <span>{`Pufi ${name}`}</span>
            </li>
        </>
    )
}

export default Button