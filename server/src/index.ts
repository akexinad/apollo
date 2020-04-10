import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";

const server = new ApolloServer({ typeDefs });

server.listen().then(res => console.log(`Server is ready at ${res.url}`));

console.log('hello world');