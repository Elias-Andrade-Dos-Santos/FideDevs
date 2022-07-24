import React from 'react'
import Slider from "react-slick";
import styles from "../css/carrosel.module.css"
import Nodejs from "../img/svg/nodejs.svg"



const carrosel = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

  return (
    <div>
        <div>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </div>
        <div className={styles.barTop}></div>
        <div className={styles.superContainer}>
            
            <Slider {...settings} className={styles.container}>
            <div>
                <img src={Nodejs} alt="" />
            </div>
            <div>
                <img src={Nodejs} alt="" />
            </div>
            <div>
                <img src={Nodejs} alt="" />
            </div>
            <div>
                <img src={Nodejs} alt="" />
            </div>
            <div>
                <img src={Nodejs} alt="" />
            </div>
            <div>
                <img src={Nodejs} alt="" />
            </div>
            </Slider>
        </div>
        <div className={styles.barBottom}></div>
    </div>
  )
}

export default carrosel