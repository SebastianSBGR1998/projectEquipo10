=
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../../graphql/projects';
import { GET_PROJECTS_NAME } from '../../graphql/projects';
import { useState } from 'react';
import '../Projects/Projects.css'
export default function Projects(props){

    const [inputBuscar, setInputBuscar] = useState('');
    console.log(props.vista)

    //console.log(inputBuscar);
    
    //console.log(props.vista)
    


    const {loading ,data} = useQuery(GET_PROJECTS);

    const [getData] = useLazyQuery(GET_PROJECTS_NAME,{
        variables:{name:inputBuscar},
        onCompleted({projectName}){
            console.log(projectName);

            
        }
    });

=======
                
        }
    });

    /*function renderBusqueda(inf){
            return <li className="proyectos">
            <p>{inf.name}</p>
            <div>
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt"></i>
            </div>
        </li>
    }*/
    
  
>>>>>>> 78023c65ed76a607e821b7661c7ff7071193916e
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

if(props.vista=="buscar"){
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
else  if(props.vista=="editar"){
    return(
        <>
            <article className="agregar-proyecto">
            <p>Editar proyecto</p>
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

                    <label htmlFor="status">Status:</label>
                    <input className="status" type="text" />

                    <button>Enviar</button>
<<<<<<< HEAD
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
=======
                </form>       
>>>>>>> 78023c65ed76a607e821b7661c7ff7071193916e
            </article>
        </>
        )
    }
    else{
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
    }
}