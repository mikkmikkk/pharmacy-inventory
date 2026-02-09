import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';

// Import your schemas and resolvers
import medicationSchema from '../../api/medications/schema';
import medicationResolvers from '../../api/medications/resolvers';

const typeDefs = mergeTypeDefs([medicationSchema]);
const resolvers = mergeResolvers([medicationResolvers]);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Create Express app
const app = express();

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

const startApolloServer = async () => {
  await server.start();

  // Apply Apollo middleware
  server.applyMiddleware({ 
    app: app,
    path: '/graphql',
    cors: true 
  });

  // Connect Express to Meteor
  WebApp.connectHandlers.use(app);

  console.log('✅ Apollo Server ready at /graphql');
};

startApolloServer().catch(console.error);