import React from 'react'
import '../style/FooterStyle.css'

const Footer = () => {
    var years = new Date().getFullYear()

  return (
    <div className='footer'>
        <p>Hecho con ❤️ por Sara Palacio</p>
        <p>Todos los derechos &copy; {years}</p>
    </div>
  )
}

export default Footer