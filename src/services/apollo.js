import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import { InMemoryCache } from 'apollo-cache-inmemory';

// higher order component to allow pages to access apollo Context. Wrapping _app.js causes issues
export function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    // properties
    const client = apolloClient || initApolloClient(apolloState);

    // render
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // setup getInitialProps to recover SSR in NextJS
  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apolloClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // if we are on the server
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      // if we the response has not been finished
      try {
        const { getDataFromTree } = await import('@apollo/react-ssr');
        // wait for the tree to load (with apollo context) and proceed
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        );
      } catch (error) {
        console.log({ error });
      }

      // will clear tree
      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState,
    };
  };

  return WithApollo;
}

const initApolloClient = (initialState = {}) => {
  // we load from cache if initialState
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    fetch, // we need to override the common apollo fetch to be able to use it on the client too
    cache,
  });
  return client;
};
