import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";

// @ts-ignore
import { createStore } from "./utils.js";

import LaunchAPI from "./datasources/launch";
// @ts-ignore
import UserAPI from "./datasources/user";

const store = createStore();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        launchAPI: new LaunchAPI(),
        userAPI: new UserAPI(store)
    })
});

server.listen().then(res => console.log(`Server is ready at ${res.url}`));
