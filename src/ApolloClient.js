import ApolloClient from 'apollo-client'

import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({ uri: process.env.REACT_APP_APPLICATION })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const cache = new InMemoryCache()
cache.writeData({ data: { token: null, currentUser: null } })

const newClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
  connectToDevTools: true
})

export default newClient
