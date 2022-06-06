import React from "react";
import styles from './InfoSquares.module.css'
import Button from "../Button/Button";

const InfoSquares = ( { name, image, icon, text }) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.image} style={{backgroundImage: `url(${image})`}}>
                    <Button />
                </div>
                <div className={styles.info}>
                    <img className={styles.icon} src={icon} alt={`${name} icon`} />
                    <h2>{name}</h2>
                    <div className={styles.separator}></div>
                    <p>{text}</p>
                    <button>&#62; ver mas</button>
                </div>
            </div>
        </>
    )
}

export default InfoSquares