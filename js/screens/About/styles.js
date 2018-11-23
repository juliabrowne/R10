import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
  },
  image: {
    alignSelf: 'center',
    marginTop: 20
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
    ...allStyles.allFonts
  },
  mainText: {
    fontSize: 12,
    alignSelf: 'center',
    margin: 50,
    ...allStyles.allFonts
  }
})

export default styles