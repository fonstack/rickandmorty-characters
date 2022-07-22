import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiURL = process.env.REACT_APP_API_URL ?? '';

const graphQlClient = new ApolloClient({
  uri: apiURL,
  cache: new InMemoryCache(),
});

export default graphQlClient;
