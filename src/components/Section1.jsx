import React from 'react'
import styles from "../css/Section1.module.css"
import Mobile from '../img/svg/mobile.svg'
import Website from '../img/svg/website.svg'
import System from '../img/svg/system.svg'
import Systemsite from '../img/svg/systemsite.svg'

const Section1 = () => {
  return (
    <div className={styles.superContainer}>
      <h1>SERVIÇOS</h1>
      <div className={styles.container}>
        <div className={styles.containerDiv}>
          <h1>Gestão de site</h1>
          <div className={styles.containerPIMG}>
          <p>Desenvolvemos sistemas para a sua pequena e grande empresa</p>
          <img src={Systemsite} alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
        <div className={styles.containerDiv}>
          <h1>Desenvolvimeto de Sistemas</h1>
          <div className={styles.containerPIMG}>
          <p>Desenvolvemos sistemas para a sua pequena e grande empresa</p>
          <img src={System} alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
        <div className={styles.containerDiv}>
          <h1>Desenvolvimeto de site ou aplicação web</h1>
          <div className={styles.containerPIMG}>
          <p>De uma grande api até um pequeno site para sua grande e pequena empresa</p>
          <img src={Website} alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
        <div className={styles.containerDiv}s>
          <h1>Desenvolvimeto de aplicação mobile</h1>
          <div className={styles.containerPIMG}>
          <p>Aplicaitvos nativos para sua estartup ou empresa</p>
          <img src={Mobile} alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1