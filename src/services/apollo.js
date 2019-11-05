import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';

// higher order component to allow pages to access apollo Context. Wrapping _app.js causes issues
export function withApollo(PageComponent) {
  const WithApollo = props => {
    // properties
    const client = new ApolloClient({
      uri: 'http://localhost:3000/api/graphql',
      fetch, // we need to override the common apollo fetch to be able to use it on the client too
    });

    // render
    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };

  return WithApollo;
}
