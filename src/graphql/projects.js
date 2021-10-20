import {gql} from "@apollo/client";


export const GET_PROJECTS = gql`
query{
    projects{
        name
        budget
      }
}
`;

export const DELETE_USER = gql`
    mutation ($id : String!){
    deleteUser(id : $id){
      name
    }
  }
  `;

export const GET_USERS = gql`
query{
    users{
            _id
            name
            email
            role
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