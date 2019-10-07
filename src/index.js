import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, HttpLink, ApolloClient } from 'apollo-boost';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
  }
});

const client = new ApolloClient({
  link,
  cache
})

ReactDOM.render(
  <>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
