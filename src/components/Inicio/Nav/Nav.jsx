import '../Inicio.css'

function Nav(){
    return(
        <nav className="barra-navegacion">
            <div className="logo">
                <img className="app-icono"src="./img/icono.svg" alt="logo" />
                <h1 className="app-nombre">InvestiApp</h1>
            </div>
            <ul className="list-inicio">
                <li>Contactanos</li>
                <li>¿Usuario nuevo?</li>
            </ul>
        </nav>
    )
}

export default Nav;