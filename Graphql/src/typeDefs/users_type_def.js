const {gql} = require ('apollo-server');

const userTypeDefs = gql `
     type User {
         userId : String
         nick: String
         email : String
         role : String
     }

     type Query {
         userByUserId(userId : String) : User
     }

`;

module.exports = userTypeDefs;