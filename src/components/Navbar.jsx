import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import '../style/NavbarStyle.css'
import { BiDotsVertical } from 'react-icons/bi';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className='navigation'>
            <a href='/'>
                <img className='logo-navbar' src='https://res.cloudinary.com/dez9y1otk/image/upload/v1693789101/Portfolio/logo_final_dljsaz.png' alt='logo-sara' />
            </a>
            <button
                className='icono-desplegable'
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <BiDotsVertical/>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"} >
                <ul>
                    <li>
                        <a href="/about">Sobre mí</a>
                    </li>
                    <li>
                        <a href="/work">Trabajo</a>
                    </li>
                    <li>
                        <a href="/projects">Proyectos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar