import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/AboutSkills.css'
import { SecondSkills } from '../components/SecondSkills'
import { FiGithub, FiLinkedin, FiBookOpen } from "react-icons/fi";

const About = () => {
  return (
    <>
      <Header />
      <div className='cont-about'>

        <img className='foto-about' src='https://res.cloudinary.com/dez9y1otk/image/upload/v1693799951/Portfolio/foto-portafolio-IMG_20230731_125813896_qyaym2.jpg' alt='Foto Sara' />

        <div className='cont-perfil'>
          <h1>¿Quién soy?</h1>
          
            <p>Soy una ingeniera civil con una gran pasión por el mundo de la programación. Mi transición a la programación ha sido una experiencia emocionante y enriquecedora que me ha permitido combinar mis habilidades analíticas y mi creatividad para crear soluciones innovadoras.
            </p>
            <p>Durante mi año de trabajo en MercadoLibre, tuve la oportunidad de trabajar en un entorno altamente dinámico y colaborativo. Aquí, adquirí una valiosa experiencia en el desarrollo web, centrándome en la creación de aplicaciones con React JS. Mi dedicación y habilidad en esta tecnología me permitieron contribuir de manera significativa a proyectos clave, mejorando la experiencia del usuario y colaborando en proyectos que impactan en miles de usuarios.</p>
            <p>Mi enfoque en el aprendizaje continuo es una parte fundamental de mi carrera, para mantenerme actualizada en las últimas tendencias y tecnologías de desarrollo web. Creo firmemente que la educación constante es esencial para sobresalir en un campo tan dinámico como la programación.
            </p>
        </div>
      </div>
        <SecondSkills/>

        <h3>Puedes contactarme a través de las redes sociales</h3>
        <div class="social-media">
            <a href="https://github.com/sarapalac10"> <FiGithub /> </a>
            <a href="https://www.linkedin.com/in/sara-palacio-01/"> <FiLinkedin /> </a>
        </div>

        <h3>Y consultar mi cv actualizado aquí </h3>
        <a href='https://drive.google.com/file/d/17FtjVrbkR2-5yDxhmfiJsu80lg-xyrKz/view?usp=drive_link'><FiBookOpen /></a>

      <Footer />
    </>
  )
}

export default About