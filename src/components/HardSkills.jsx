import React from 'react';
import '../style/HardSkillStyle.css';

const HardSkills = () => {
  return (
    <div className='cont-skills'>
        <h2>Habilidades Técnicas</h2>
        <div className='contenedor-skills'>
            <figure class="snip0015">
            <img src="https://res.cloudinary.com/dez9y1otk/image/upload/v1693950372/Portfolio/flat_750x_075_f-pad_750x1000_f8f8f8.u3_vmnulp.jpg" alt="The React Logo - React Js Logo Svg@nicepng.com" />                <figcaption>
                    <h2>React Js</h2>
                    {/* <p>That everyone has his price, or that the price is always so low.</p> */}
                </figcaption>
            </figure>
            <figure class="snip0015">
                <img src="https://www.nicepng.com/png/detail/985-9857805_html5-css3-logo-png-html-and-css-logo.png" alt="sample39"/>
                <figcaption>
                    <h2>HTML5, CSS3</h2>
                </figcaption>
            </figure>
            <figure class="snip0015">
            <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-7.jpg" alt="Technologies Used - - Vanilla Javascript@nicepng.com" />
                <figcaption>
                    <h2>JavaScript</h2>
                </figcaption>
            </figure>
            <figure class="snip0015">
                <img src="https://www.freecodecamp.org/news/content/images/2022/07/git-and-github.png" alt="Png - Git Icon@nicepng.com" />
                <figcaption>
                    <h2>Gestión de proyectos- Git y Github</h2>
                </figcaption>
            </figure>
        </div>
        <hr />

    </div>
)
}

export default HardSkills