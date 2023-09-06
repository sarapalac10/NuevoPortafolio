import React from 'react'
import '../style/FooterStyle.css'
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    var years = new Date().getFullYear()

  return (
    <div className='footer'>
        <p>Hecho con ❤️ por Sara Palacio - Todos los derechos &copy; {years}</p>
        <div className='iconos-footer'>
          <p>Redes sociales: </p>
          <a href="https://github.com/sarapalac10"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/sara-palacio-01/"><FiLinkedin /></a>
        </div>
    </div>
  )
}

export default Footer