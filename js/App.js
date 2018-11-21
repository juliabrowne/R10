import React, { Component } from 'react'
// import { View } from 'react-native'
import AppNavigator from './navigation/RootStackNavigator'
// import AboutContainer from './screens/About'
import FavesProvider from './context/FavesContext'


export default class App extends Component {
  render() {
    return (
        <FavesProvider>
          < AppNavigator />
        </FavesProvider>
    )
  }
}