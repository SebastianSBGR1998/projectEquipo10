
export default function Main(props){


    const handleClick = () => {
       console.log("Haciendo click");
      }

    return(
        <main>
            <div className="projects">
                <aside>
                    <ul>
                        <li className="boton-nuevo"> <button className="botones" onClick={handleClick}>Nuevo</button> </li>
                        <li className="boton-buscar"><button className="botones" onClick={handleClick}>Buscar</button></li>
                        <li className="boton-editar"><button className="botones" onClick={handleClick}>Editar</button></li>
                    </ul>
                </aside>
                <section>
                   {props.children}
                </section>
            </div>
        </main>
    )
}