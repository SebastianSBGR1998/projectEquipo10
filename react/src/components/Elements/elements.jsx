import React from "react";

import './Elements.css'
import Login from './../Login/login'

function Elements (){
    return ( 
        <div class="row">
            <div class="column side">
                <h2>Login</h2>
                 <Login/>
            </div>
  
            <div class="column middle">
                <h2>Tabla con los resultados de la base de datos</h2>
                <table>
                    <td>
                        <tr> 1</tr>
                        <tr> 1</tr>
                        <tr> 1</tr>
                    </td>
                    <td>
                        <tr> 2</tr>
                        <tr> 2</tr>
                        <tr> 2</tr>
                    </td>
                </table>
           </div>
        </div>
        
    )
} 

export default Elements;