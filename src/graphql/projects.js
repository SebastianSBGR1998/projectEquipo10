import {gql} from "@apollo/client";


export const GET_PROJECTS = gql`
query{
    projects{
        name
      }
}
`;

export const GET_PROJECTS_NAME = gql `
query($name: String){
    projectName(name: $name){
     id
     name
   }
   
}
`;