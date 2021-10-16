import '../Projects/Projects.css'
export default function Projects(props){

    console.log(props.vista)


if (props.vista=="nuevo"){
    return(
        <>
            <article className="agregar-proyecto">
                <p>Agregar nuevo proyecto</p>
                <form action="">
                    <label htmlFor="titulo">Titulo:</label>
                    <input className="titulo" type="text" />

                    <label htmlFor="descripcion">Descripción:</label>
                    <input className="descripcion" type="textarea" />

                    <label htmlFor="objetivo">Objetivo:</label>
                    <input className="objetivo" type="textarea" />

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
                    <input className="presupuesto" type="number" placeholder="$"/>

                    <label htmlFor="status">Status:</label>
                    <input className="status" type="text" />

                    <label htmlFor="avances">Avances:</label>
                    <input className="avance" type="text" />

                    <button>Enviar</button>
                </form>
            </article>        
        </>
    )  
}else if(props.vista=="buscar"){
    return(
        <>
            <article className="buscar-proyecto">
                <p>Vista en proceso...</p>        
            </article>
        </>
    )
}
else{
    return(
        <>
            <article className="editar-proyecto">                            
                <p>Proyectos registrados</p>
                <form className="buscar" action="">
                    <input type="text" placeholder="Nombre del proyecto"/><button >Buscar</button>
                </form>
                <ul>
                    <li className="proyectos">
                        <p>Administracion de recursos</p>
                        <div>
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                        </div>
                    </li>
                    <li className="proyectos">
                        <p>Energias renovables</p>
                        <div>
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                        </div>
                    </li>
                </ul>                          
            </article>
        </>
        )
    }
}