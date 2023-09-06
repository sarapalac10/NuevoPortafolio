import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style/ProjectSkills.css';

const PreviewProjects = () => {
  return (
    <>
        <h2>Proyectos Recientes</h2>
        <div className='cont-previewProject'>
            <a href="/projects">
                <Card>
                <Card.Img style={{ width: '18rem', height: '15rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693950213/Portfolio/Imagen1_ildwv2.png" />
                <Card.Body>
                    <Card.Title class="text-center fw-bold">Mood Master</Card.Title>
                </Card.Body>
                </Card>
            </a>

            <a href="/projects">
                <Card>
                <Card.Img style={{ width: '18rem', height: '15rem' }} variant="top" src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693951275/Portfolio/img-proyecto9_nftkvn.png" />
                <Card.Body>
                    <Card.Title class="text-center fw-bold">Menu App</Card.Title>
                </Card.Body>
                </Card>
            </a>
        </div>
    </>
  )
}

export default PreviewProjects