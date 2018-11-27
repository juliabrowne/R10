import React, { Component } from 'react'
import AppNavigator from './navigation/RootStackNavigator'
import { FavesProvider } from './context/FavesContext'
import { ApolloProvider } from 'react-apollo'
import client from './config/api'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
    )
  }
}

export default App
