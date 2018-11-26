import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { sharedNavigationOptions } from './config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AboutScreen from '../screens/About'
import ScheduleScreen from '../screens/Schedule'
import MapScreen from '../screens/Map'
import FavesScreen from '../screens/Faves'
import SessionScreen from '../screens/Session'

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
      screen: SessionScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: 'Schedule',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')}>
          <Ionicons
            name={'md-menu'}
            size={25}
            color={'white'}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
)

const MapStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: 'Map',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')}>
          <Ionicons
            name={'md-menu'}
            size={25}
            color={'white'}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
)

const FavesStack = createStackNavigator(
  {
    Faves: {
      screen: FavesScreen,
      screen: SessionScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: 'Faves',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')}>
          <Ionicons
            name={'md-menu'}
            size={25}
            color={'white'}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
)

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: 'About',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')}>
          <Ionicons
            name={'md-menu'}
            size={25}
            color={'white'}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
)

const DrawerNavigator = createDrawerNavigator({
  Schedule: ScheduleStack,
  About: AboutStack,
  Map: MapStack,
  Faves: FavesStack
})

export default DrawerNavigator
