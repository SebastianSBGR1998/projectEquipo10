import { useQuery } from '@apollo/client'
import { useLazyQuery} from '@apollo/client'
import { GET_PROJECTS } from '../../graphql/projects';
import { GET_PROJECTS_NAME } from '../../graphql/projects';
import { useState } from 'react';
import '../Projects/Projects.css'
export default function Projects(props){

    const [inputBuscar, setInputBuscar] = useState('');

    console.log(props.vista)

    const {loading ,data} = useQuery(GET_PROJECTS);

    const [getData] = useLazyQuery(GET_PROJECTS_NAME,{
        variables:{name:inputBuscar},
        onCompleted({projectName}){
            console.log(projectName);

        }
    });

    function renderProjects (){
        return data.projects.map((proj) =>{
            return <li className="proyectos">
            <p>{proj.name}</p>
            <div>
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt"></i>
            </div>
        </li>
        })
        
    }

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
                <p>Proyectos registrados</p>
                <form className="buscar" action="">
                    <input value={inputBuscar} onInput={e => {setInputBuscar(e.target.value)
                        e.preventDefault}} type="text" placeholder="Nombre del proyecto"/>
                    <button onClick={()=>getData()}>Buscar</button>
                </form>
                { loading ? <p>cargando...</p>:
                <ul>
                    {renderProjects()} 
                </ul> }                         
            </article>

        </>   

        
    )
}
else{
    return(
        <>
            <article className="buscar-proyecto">
                <p>Vista en proceso...</p>        
            </article>
        </>
        )
    }
}