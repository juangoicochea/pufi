import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './Slider.css'
import Button from "../Button/Button";

const Slider = () => {

    const dataSlider = [
        {
          id: uuidv4(),
          title: "Estár comodo, nunca fue tan fácil.",
          subTitle: ""
        },
        {
          id: uuidv4(),
          title: "Comodidad a cualquier lugar que vayas.",
          subTitle: ""
        }
      ]

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <div className='sliderTitle'>
                                {obj.title}
                                <Button />
                            </div>
                            
                            <img
                            src={process.env.PUBLIC_URL + `/Imgs/home-slider-${index + 1}.png`} 
                            />
                            
                        </div>
                    )
                })}

                <div className="container-dots">
                    {Array.from({length: 2}).map((item, index) => (
                        <div 
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider