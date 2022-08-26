import React from 'react'
import Home from './Home'
import Carrosel from './components/carrosel'
import Section1 from './components/Section1'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import { BsFillChatDotsFill } from "react-icons/bs";
import styles from "../src/css/app1.module.css"

const App = () => {
  return (
    <div className={styles.cuperContainer}>
      <div>
        <a href=""><BsFillChatDotsFill className={styles.icon}/></a>
      </div>
      {/* <Login/> */}
      {/* <Register/> */}
      <Home/>
      <div className={styles.bar}></div>
      <Section1/> 
      <Carrosel/>
      <Footer/>
    </div>
  )
}

export default App