import React from 'react'
import Card from 'react-bootstrap/Card';
import { BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoHtml5 } from "react-icons/bi";
import '../style/FullProjectStyles.css'

const CardProjects = () => {
    return (
      <div className='cont-projects'>
      <h1>Proyectos realizados</h1>
        <Card style={{ width: '20rem' }}>
          <Card.Img style={{ height: '18rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693950213/Portfolio/Imagen1_ildwv2.png" />
          <Card.Body>
            <Card.Title>Mood Master</Card.Title>
            <Card.Text className='logo-lenguaje'>
              Tecnologías utilizadas: <span><BiLogoReact /> <BiLogoJavascript /> <BiSolidFileCss/> <BiLogoHtml5 /> </span>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/sarapalac10/MonokuApp">Repositorio Github</Card.Link>
            <Card.Link href="https://mood-master.vercel.app/">Funcionamiento</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img style={{ height: '18rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693951275/Portfolio/img-proyecto9_nftkvn.png" />
          <Card.Body>
            <Card.Title>Menú App</Card.Title>
            <Card.Text className='logo-lenguaje'>
              Tecnologías utilizadas: <span><BiLogoReact /> <BiLogoJavascript /> <BiSolidFileCss/> <BiLogoHtml5 /> </span>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/sarapalac10/Alkemy-MenuApp">Repositorio Github</Card.Link>
            <Card.Link href="https://sarapalac10.github.io/Alkemy-MenuApp/">Funcionamiento</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img style={{ height: '18rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693964327/Portfolio/colorgame_r6wlog.png" />
          <Card.Body>
            <Card.Title>Color Game</Card.Title>
            <Card.Text className='logo-lenguaje'>
              Tecnologías utilizadas: <span><BiLogoJavascript /> <BiSolidFileCss/> <BiLogoHtml5 /> </span>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/sarapalac10/ColourGame">Repositorio Github</Card.Link>
            <Card.Link href="https://sarapalac10.github.io/ColourGame/">Funcionamiento</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img style={{ height: '18rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693951290/Portfolio/img-proyecto0_cynbnd.png" />
          <Card.Body>
            <Card.Title>Calculadora</Card.Title>
            <Card.Text className='logo-lenguaje'>
              Tecnologías utilizadas: <span><BiLogoJavascript /> <BiSolidFileCss/> <BiLogoHtml5 /> </span>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/sarapalac10/Reto2-Sprint1">Repositorio Github</Card.Link>
            <Card.Link href="https://sarapalac10.github.io/Reto2-Sprint1/">Funcionamiento</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img style={{ height: '18rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693964327/Portfolio/drumkit_belckp.png" />
          <Card.Body>
            <Card.Title>Batería App</Card.Title>
            <Card.Text className='logo-lenguaje'>
              Tecnologías utilizadas: <span><BiLogoJavascript /> <BiSolidFileCss/> <BiLogoHtml5 /> </span>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/sarapalac10/DrumKit">Repositorio Github</Card.Link>
            <Card.Link href="https://sarapalac10.github.io/DrumKit/">Funcionamiento</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img style={{ height: '18rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693961398/Portfolio/img-proyecto4_cb0h88.png" />
          <Card.Body>
            <Card.Title>Conversor de moneda</Card.Title>
            <Card.Text className='logo-lenguaje'>
              Tecnologías utilizadas: <span> <BiLogoJavascript /> <BiSolidFileCss/> <BiLogoHtml5 /> </span>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/sarapalac10/Reto1-AG">Repositorio Github</Card.Link>
            <Card.Link href="https://sarapalac10.github.io/Reto1-AG/">Funcionamiento</Card.Link>
          </Card.Body>
        </Card>
      </div>
      );
}

export default CardProjects