import React, {useRef}from 'react'
import styles from "../css/Section1.module.css"
import Jsonnn from '../components/shoes.json'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Mobile from "../img/svg/mobile.svg"


const Section1 = () => {
  
  const Carrosel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(Carrosel.current.scrollLeft -= Carrosel.current.offsetWidth);
    Carrosel.current.scrollLeft -= Carrosel.current.offsetWidth;
    
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(Carrosel.current.scrollLeft += Carrosel.current.offsetWidth);
    Carrosel.current.scrollLeft += Carrosel.current.offsetWidth;
    s
  }

  return (
    <div className={styles.container} >
      <div onClick={handleLeftClick} ><BsChevronDoubleLeft className={styles.buttoniconlast} /></div>
      <div className={styles.carrosel} ref={Carrosel}>
        {
          Jsonnn.map((item) => {
            const {id, name, img} = item;
            return(
            <div className={styles.item} key={id}>
              <h1>{name}</h1>
              <div className={styles.containerItem}>
                <div className={styles.conteudo1}>
                  <img className={styles.img} src={img} alt="" />
                </div>
                <div className={styles.conteudo2}>
                    
                </div>
              </div>
            </div>)
          })
        
        }
      </div>
      <div onClick={handleRightClick} > <BsChevronDoubleRight className={styles.buttoniconright} /> </div>
    </div>
  )
}

export default Section1