import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  allFonts: {
    ...Platform.select({
        ios: {
          fontFamily: 'Montserrat'
        },
        android: {
          fontFamily: 'Montserrat-Regular'
        }
  })
}})

export default styles