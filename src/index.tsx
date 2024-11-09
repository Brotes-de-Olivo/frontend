import {createRoot} from 'react-dom/client'
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import {Toaster} from 'react-hot-toast'

import './index.css'
import App from 'App'
import {BrowserRouter} from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container!)

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
})

const authLink = setContext((_, {headers}) => {
  return {
    headers,
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />

      <Toaster position='top-center' reverseOrder />
    </ApolloProvider>
  </BrowserRouter>
)
