import React from 'react'
import { Platform, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'
import { sharedNavigationOptions } from './config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AboutScreen from '../screens/About'
import ScheduleScreen from '../screens/Schedule'
import MapScreen from '../screens/Map'
import FavesScreen from '../screens/Faves'


const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation),
    drawerLabel: 'Schedule',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')} >
      <Ionicons name={'md-menu'} size={25} color={'white'} style={{'marginLeft': 20}} />
      </TouchableOpacity>
    ),
    // drawerIcon: ({ horizontal, tintColor }) => (
    //   <Ionicons name={'md-calendar'} size={25} color={'red'} />
    // )
  }
  )
})

const MapStack = createStackNavigator({
  Map: {
    screen: MapScreen
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation),
    drawerLabel: 'Map',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')} >
      <Ionicons name={'md-menu'} size={25} color={'white'} style={{'marginLeft': 20}} />
      </TouchableOpacity>
    ),
    // drawerIcon: ({ horizontal, tintColor }) => (
    //   <Ionicons name={'md-map'} size={horizontal ? 20 : 25} color={tintColor} />
    // )
  })
})

const FavesStack = createStackNavigator({
  Faves: {
    screen: FavesScreen
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation),
    drawerLabel: 'Faves',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')} >
      <Ionicons name={'md-menu'} size={25} color={'white'} style={{'marginLeft': 20}} />
      </TouchableOpacity>
    ),
    // drawerIcon: ({ horizontal, tintColor }) => (
    //   <Ionicons name={'md-heart'} size={horizontal ? 20 : 25} color={tintColor} />
    // )
  })
})

const AboutStack = createStackNavigator({
  About: AboutScreen
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation),
    drawerLabel: 'About',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer('Schedule')} >
      <Ionicons name={'md-menu'} size={25} color={'white'} style={{'marginLeft': 20}} />
      </TouchableOpacity>
    ),
    // drawerIcon: ({ horizontal, tintColor }) => (
    //   <Ionicons name={'md-information-circle'} size={horizontal ? 20 : 25} color={tintColor} />
    // )
  })
})

const DrawerNavigator = createDrawerNavigator({
  Schedule: ScheduleStack,
  About: AboutStack,
  Map: MapStack,
  Faves: FavesStack
})

export default DrawerNavigator
