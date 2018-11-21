import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { sharedNavigationOptions } from './config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AboutScreen from '../screens/About'
import ScheduleScreen from '../screens/Schedule'
import MapScreen from '../screens/Map'
import FavesScreen from '../screens/Faves'

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
})

const MapStack = createStackNavigator({
  Map: MapScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
})

const FavesStack = createStackNavigator({
  Faves: FavesScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
})

const AboutStack = createStackNavigator({
  About: AboutScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
})

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator({
  Schedule: ScheduleStack,
  Map: MapStack,
  Faves: FavesStack,
  About: AboutStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'About') {
        iconName = 'ios-information-circle'
      } else if (routeName === 'Schedule') {
        iconName = 'ios-calendar'
      } else if (routeName === 'Map') {
        iconName = 'ios-map'
      } else if (routeName === 'Faves') {
        iconName = 'ios-heart'
      }
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    style: {
      fontFamily: 'Montserrat-Light',
      backgroundColor: 'black',
      fontSize: 10
    }
  },
}
)