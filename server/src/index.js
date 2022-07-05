import {
  ApolloServer,
  AuthenticationError,
  UserInputError,
} from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import resolvers from "./resolvers";
import schema from "./schema";

import config from "./config";
import { fastConnection, slowConnection } from "./dbConnections";

async function startApolloServer(schema, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const fastConn = await fastConnection();
  const slowConn = await slowConnection();
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: async ({ req, connection, res }) => {
      if (connection) {
        console.log("connection started here please");
        return { slowConn, fastConn, config, connection };
      }

      if (req) {
        //console.log("reg is here");
        //slowConn and fastConn represents the database connections
        return {
          slowConn,
          fastConn,
          config,
          req,
        };
      }
    },
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(schema, resolvers);
