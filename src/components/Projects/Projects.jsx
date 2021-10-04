import './Projects.css'
export default function Projects(){
    return(
        <>
            <div className="projects">
                <aside>
                    <ul>
                        <li>Nuevo</li>
                        <li>Buscar</li>
                        <li>Avances</li>
                    </ul>
                </aside>
                <section>
                    <article className="agregar-proyecto">
                        <p>Agregar nuevo proyecto</p>
                        <form action="">
                            <label htmlFor="titulo">Titulo:</label>
                            <input className="titulo" type="text" />

                            <label htmlFor="descripcion">Descripción:</label>
                            <input className="descripcion" type="textarea" />

                            <div className="fecha">
                                <div>
                                    <label htmlFor="fecha-inicial">Fecha inical: </label>
                                    <input className="fecha-inicio" type="date"  />
                                </div>
                                <div>
                                    <label htmlFor="fecha-final">Fecha final: </label>
                                    <input className="fecha-final" type="date" />
                                </div>
                            </div>
                            

                            <label htmlFor="presupuesto">Presupuesto:</label>
                            <input className="presupuesto" type="number" placeholder="  $"/>

                            <button>Enviar</button>
                        </form>
                    </article>


                </section>
            </div>
        </>
    )
}