const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const Project = require('../models/project.model');
const Contribution = require('../models/contribution.model');

const ProjectType = require("./types/project_type");
const UserType = require("./types/user_type");

const ContributionType = require("./types/contribution_type");
const isTokenValid = require('../helper/validate');
const User = require('../models/user.model');

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
        },
        userId: {
          type: new GraphQLNonNull(GraphQLString)
          }
        }
      ,
      async resolve(parent, args,) {
        let project = new Project({
          name: args.name,
          description: args.description,
          budget: args.budget,
          userId: args.userId,
        });
        return project.save();
      }
    },
    
    deleteProject: {
      type: ProjectType,
      args: {
        id : {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      async resolve(parent, args,) {
        let project = new Project({
          id: args.id,
        });
        return Project.deleteOne({"_id" : args.id})
      }
    },

    deleteUser: {
      type: UserType,
      args: {
        id : {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      async resolve(parent, args,) {
        let user = new User({
          id: args.id,
        });
        return User.deleteOne({"_id" : args.id})
      }
    },
  }
});

module.exports = Mutation