import React from "react";
import styles from './Navbar.module.css'
import Button from "./Button/Button";
import puffIcon from '../../assets/pufi-puff-icon.png'
import rainIcon from '../../assets/pufi-rain-icon.png'
import cartIcon from '../../assets/pufi-cart-icon.png'
import napIcon from '../../assets/pufi-nap-icon.png'

const info = [
  { name: 'puff', image: puffIcon },
  { name: 'rain', image: rainIcon },
  { name: 'cart', image: cartIcon },
  { name: 'nap', image: napIcon },
]

const Navbar = () => {

    return (
        <>
            <div className={styles.container}>
                <ul>
                    {
                        info.map(e => (
                            <Button
                                name={e.name}
                                image={e.image}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar