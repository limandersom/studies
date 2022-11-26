import { Link } from 'react-router-dom'

import Container from "./Container"

import style from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {

    return (
        <nav className={style.navbar}>
            <Container>
                <Link>
                    <img src={logo} alt="Cost"/>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/newproject">Novo Projeto</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar