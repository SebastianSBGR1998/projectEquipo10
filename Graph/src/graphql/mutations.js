const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const Project = require('../models/project.model');
const Contribution = require('../models/contribution.model');

const ProjectType = require("./types/project_type");
const ContributionType = require("./types/contribution_type");
const isTokenValid = require('../helper/validate');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        budget: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      async resolve(parent, args,) {
        let project = new Project({
          name: args.name,
          description: args.description,
          budget: args.budget,
        });
        return project.save();
      }
    },
    
  }
});

module.exports = Mutation