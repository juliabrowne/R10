import { createStackNavigator, createAppContainer } from 'react-navigation'
import AppNavigator from './NavigationLayout'
// import AboutStack from './NavigationLayout'
// import ScheduleStack from './NavigationLayout'
// import MapStack from './NavigationLayout'
// import FavesStack from './NavigationLayout'

// const AppNavigator = createStackNavigator({
//   About: AboutStack,
//   Schedule: ScheduleStack,
//   Map: MapStack,
//   Faves: FavesStack
// }, { headerMode: 'none' })
// headerMode hides top nav bar!

export default createAppContainer(AppNavigator)