
import Header from './components/header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AllCharacters from './pages/AllCharacters';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const App = () => {

  const classNames = ['map1', 'map2', 'map3', 'map4', 'map5', 'map6', 'map7', 'map8', 'map9', 'map10'];

  //select a random background image
  const randomClass = classNames[Math.floor(Math.random() * classNames.length)];

  return (
    <ApolloProvider client={client}>
    <div className={randomClass}>

      <Header />
      <Outlet />
      <AllCharacters />
      <Footer />

   
    </div>
    </ApolloProvider>
  );

};

export default App;

