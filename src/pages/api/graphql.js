import { ApolloServer, gql } from 'apollo-server-micro';

// Query is a Resolver
// define what we want to hit
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

// define what happens when we hit it
const resolvers = {
  Query: {
    sayHello: () => {
      return 'Hello NextJS from Apollo GraphQL';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
