import React from "react";
import { useLazyQuery, useQuery, useMutation} from '@apollo/client'
import { DELETE_USER } from '../../graphql/projects'
import {useState} from 'react';


export default function User({name , _id}){
    const [deleteUser] = useMutation(DELETE_USER);
    const [data, setData] = useState("valor inicial");
    return <li className="proyectos" > {_id}
    <div>
    <button  class="far fa-edit" ></button>
    
    <button class="far fa-trash-alt"  onClick={() => deleteUser({
        variables: {id: _id}
    }) }></button>
</div>
</li>; 
}

