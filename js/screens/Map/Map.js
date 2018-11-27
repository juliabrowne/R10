import React from 'react'
import { View, Image, Dimensions } from 'react-native'

const Map = () => {
  return (
    <View>
      <Image
        style={{
          // code obtained from "Screen width in React Native" in StackOverflow
          // https://stackoverflow.com/questions/33804500/screen-width-in-react-native
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height
        }}
        source={require('../../assets/images/conference-map.png')}
      />
    </View>
  )
}

export default Map
