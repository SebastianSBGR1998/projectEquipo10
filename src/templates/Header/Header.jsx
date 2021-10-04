import {Link} from 'react-router-3';

export default function Header(){
    return(
        <header>
            <nav>
                <div className="icono">
                    <Link to="/"><img src="./img/icono.svg" alt="" /></Link>
                    <h1>InvestiApp</h1>
                </div>
                <ul>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/leaders">Lideres</Link></li>
                    <li><Link to="/students">Estudiantes</Link></li>
                </ul>
                <ul>
                    <li>Usuario</li>
                    <li><i class="fas fa-user"></i></li>
                </ul>
            </nav>
        </header>
        
    )
}