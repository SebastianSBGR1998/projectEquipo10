const {gql} = require('apollo-server');

const projectTypes = gql `
    type Project{
        name : String
        description : String
        budget : Int
     }

     input  ProjectInput{
         name : String
         description : String
     }

     extend type Query{
         projectByIdUser(userId : String!): [Project]

     }

     type Mutation {
         createProject(project: ProjectInput!): Project
     }

`

module.exports = projectTypes;
