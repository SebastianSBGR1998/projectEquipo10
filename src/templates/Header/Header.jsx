export default function Header(){
    return(
        <header>
            <nav>
                <div className="icono">
                    <img src="./img/icono.svg" alt="" />
                    <h1>InvestiApp</h1>
                </div>
                <ul>
                    <li>Proyectos</li>
                    <li>Lideres</li>
                    <li>Estudiantes</li>
                </ul>
                <ul>
                    <li>Usuario</li>
                    <li><i class="fas fa-user"></i></li>
                </ul>
            </nav>
        </header>
        
    )
}