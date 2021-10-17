const user_resolver = {
    Query :{
        userByUserId: (_, {userId} , {dataSources} ) => {
            return dataSources.projectInvAPI.userByUserId(userId)


        },
    },
    Mutation : {}
};

module.exports = user_resolver;