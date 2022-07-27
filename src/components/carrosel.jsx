import React from 'react'
import Slider from "react-slick";
import styles from "../css/carrosel.module.css"
import Nodejs from "../img/svg/nodejs.svg"
import Reactjs from "../img/svg/reactjs.svg"
import Js from '../img/svg/js.svg'
import Php from "../img/svg/php-svgrepo-com.svg"
import Mysql from "../img/svg/mysql-svgrepo-com.svg"
import Mongo from "../img/svg/mongodb-svgrepo-com.svg"


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
                <img src={Reactjs} alt="" />
            </div>
            <div>
                <img src={Js} alt="" />
            </div>
            <div>
                <img src={Php} alt="" />
            </div>
            <div>
                <img src={Mysql} alt="" />
            </div>
            <div className={styles.logoMongo}>
                <img src={Mongo} alt="" />
            </div>
            </Slider>
        </div>
        <div className={styles.barBottom}></div>
    </div>
  )
}

export default carrosel