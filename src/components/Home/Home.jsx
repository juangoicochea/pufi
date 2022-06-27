import React from "react";
import { useState } from 'react';
import Header from '../Header/Header'
import Slider from "../Slider/Slider";
import InfoSquares from "../InfoSquares/InfoSquares";
import Footer from "../Footer/Footer";
import styles from './Home.module.css'
import pufiRainImage from '../../assets/info-pufi-rain-image.png'
import pufiRainIcon from '../../assets/info-pufi-rain-icon.png'
import pufiPuffImage from '../../assets/info-pufi-puff-image.png'
import pufiPuffIcon from '../../assets/info-pufi-puff-icon.png'
import pufiCartImage from '../../assets/info-pufi-cart-image.png'
import pufiCartIcon from '../../assets/info-pufi-cart-icon.png'
import pufiNapImage from '../../assets/info-pufi-nap-image.png'
import pufiNapIcon from '../../assets/info-pufi-nap-icon.png'
import { ElfsightWidget } from 'react-elfsight-widget';

const info = [
    { name: 'Pufi RAIN', image: pufiRainImage, icon: pufiRainIcon, text: 'Descripción del producto. Este es un texto simulado' },
    { name: 'Pufi PUFF', image: pufiPuffImage, icon: pufiPuffIcon, text: 'Descripción del producto. Este es un texto simulado' },
    { name: 'Pufi CART', image: pufiCartImage, icon: pufiCartIcon, text: 'Descripción del producto. Este es un texto simulado' },
    { name: 'Pufi NAP', image: pufiNapImage, icon: pufiNapIcon, text: 'Descripción del producto. Este es un texto simulado' }
]

function validate(input) {
    let errors = {}
    const RegExesEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (input.email && input.email.match(RegExesEmail) === null) {
        errors.email = 'Por favor ingresa un email valido'
    }
    return errors
}

const Home = () => {
    const [ errors, setErrors ] = useState({})
    const [ input, setInput ] = useState({
        email: ''
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert('Te suscribiste exitosamente')
        setInput({
            email: ''  
         })
    }

    return (
        <>
            <Header />
            <Slider />
            {
                info.map(e => (
                    <InfoSquares
                        name={e.name}
                        image={e.image}
                        icon={e.icon}
                        text={e.text}
                    />
                ))
            }

            <div className={styles.containerInsta}>
                <p>Instagram</p>
                <h2>#Espufi</h2>
                <ElfsightWidget widgetID="3a414a70-2059-496a-97a3-ff8f03d8d4e9" />
                <div className={styles.hidder}></div>
            </div>

            <div className={styles.container}>
                <p>Newsletter</p>
                <h2>Suscribite</h2>
                <span>Y enterate de todas las novedades</span>
                <br />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="email" value={input.email} name="email" placeholder='Ingresa tu email' onChange={(e) => handleChange(e)} />
                    {Object.keys(errors).length === 0 && input.email.length >= 1 ?
                        <button type='submit'>&rarr;</button> : null
                    }
                    {errors.email && (<p>{errors.email}</p>)}
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Home