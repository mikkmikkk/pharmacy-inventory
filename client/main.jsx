import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from '../imports/ui/App';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const container = document.getElementById('react-target');
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);