import React from 'react'
import { Platform } from 'react-native'
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
import SessionScreen from '../screens/Session'
import SpeakerScreen from '../screens/Speaker'

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen,
    Speaker: SpeakerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen,
    Speaker: SpeakerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'About') {
          iconName = 'ios-information-circle'
        } else if (routeName === 'Schedule') {
          iconName = 'ios-calendar'
        } else if (routeName === 'Map') {
          iconName = 'ios-map'
        } else if (routeName === 'Faves') {
          {
            Platform.OS === 'ios' && (iconName = 'ios-heart')
          }
          {
            Platform.Version === 27 && (iconName = 'md-heart')
          }
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      style: {
        fontFamily: 'Montserrat-Light',
        backgroundColor: 'black',
        fontSize: 10
      }
    }
  }
)
