const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const isTokenValid = require('../helper/validate');

const User = require('../models/user.model');
const Project = require('../models/project.model');
const Contribution = require('../models/contribution.model');

const UserType = require("./types/user_type");
const ProjectType = require("./types/project_type");
const ContributionType = require("./types/contribution_type");

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent) {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      async resolve(parent, args) {
        return User.findById(data.id);
      }
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      async resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      async resolve(parent, args, info) {
        return Project.find({})
      }
    },
    
  }
});

module.exports = RootQuery