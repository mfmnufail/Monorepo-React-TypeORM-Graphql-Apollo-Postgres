import 'reflect-metadata';

import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { resolvers } from '../resolvers';
import { typeDefs } from '../typeDefs';
import { connectDb } from './connect-db';

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers,  context: ({ req, res }: any) => ({ req, res }) });

  const app = express();

  server.applyMiddleware({ app });

  connectDb();

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
};

startServer();
