import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import App from './App.jsx';
import Header from './header.jsx';
import Create from './pages/Create.jsx';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Header />
      <App />
      <Create />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);