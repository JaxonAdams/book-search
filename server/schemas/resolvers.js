const { User } = require("../models");

const resolvers = {
    Query: {
        users: () => {
            return User.find({}).select('-__v -password')
        }
    }
};

module.exports = resolvers;