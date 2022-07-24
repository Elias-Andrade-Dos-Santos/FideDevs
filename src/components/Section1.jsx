import React from 'react'
import styles from "../css/Section1.module.css"


const Section1 = () => {
  return (
    <div className={styles.superContainer}>
      <h1>SERVIÇOS</h1>
      <div className={styles.container}>
        <div className={styles.containerDiv}>
          <h1>Gestão de site</h1>
          <div className={styles.containerPIMG}>
          <p>Desenvolvemos sistemas para a sua pequena e grande empresa</p>
          <img src="#" alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
        <div className={styles.containerDiv}>
          <h1>Desenvolvimeto de Sistemas</h1>
          <div className={styles.containerPIMG}>
          <p>Desenvolvemos sistemas para a sua pequena e grande empresa</p>
          <img src="#" alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
        <div className={styles.containerDiv}>
          <h1>Desenvolvimeto de site ou aplicação web</h1>
          <div className={styles.containerPIMG}>
          <p>De uma grande api até um pequeno site para sua grande e pequena empresa</p>
          <img src="#" alt="" />
          <div className={styles.buttom}>
            Contratar Serviço
          </div>
          </div>
        </div>
        <div className={styles.containerDiv}s>
          <h1>Desenvolvimeto de aplicação mobile</h1>
          <div className={styles.containerPIMG}>
          <p>Aplicaitvos nativos para sua estartup ou empresa</p>
          <img src="#" alt="" />
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