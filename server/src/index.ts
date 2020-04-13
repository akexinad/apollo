import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";

const server = new ApolloServer({ typeDefs });

const foo = (      name: string) => name;

server.listen().then(res => console.log(`Server is ready at ${res.url}`));
