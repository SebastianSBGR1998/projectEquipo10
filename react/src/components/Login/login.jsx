import React from "react";
import { Fragment } from "react";
import './Login.css';

function Login (){
    return ( 
        < Fragment>
            <div class="grid-container">    
                
                <div class="grid-item" id="cont2">
                    <p>Iniciar Sesión</p>
                    <br></br>
                    <form>
                    <input type="text" placeholder="Usuario o Correo electronico" name="user"></input>
                    <input type="password" placeholder="Contraseña" name="password"></input>
                    <input type="submit" class="button" value="Ingresar"></input>
                    </form>
                </div>
           </div>
        </Fragment>
    )
} 


export default Login;