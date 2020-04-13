import { IResolver } from "./interfaces";
import { IResolvers } from "apollo-server";

const resolvers: IResolvers = {
    Query: {
        launches: (_, __, { dataSources }) => dataSources.launchAPI.getAllLaunches(),
        launch: (_, { id }, { dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id }),
        me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};

export default resolvers;
