const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = require("./user_type");

const ProjectType = new GraphQLObjectType({
  name: 'project',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    budget: {
      type: GraphQLString
    },
    /*user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById( parent.userId )
      }
    }*/
  })
});

module.exports = ProjectType
