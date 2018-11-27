import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Montserrat-Regular'
    }
  }
  render() {
    return <Map />
  }
}

export default MapContainer
