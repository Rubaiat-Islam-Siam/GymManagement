import React from 'react'
import Hero from './Component/Hero'
import Work from './Component/Work'
import Gallary from './Component/Gallary'
import Contact from './Component/Contact'
import BMI from './Component/BMI'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Work/>
      <Gallary/>
      <BMI/>
      <Contact/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Footer/>
    </div>
  )
}

export default App
