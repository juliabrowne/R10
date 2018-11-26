import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  },
  image: {
    alignSelf: 'center',
    marginTop: 20
  },
  headerText: {
    fontSize: 20,
    ...allStyles.allFonts,
    margin: 20,
    marginVertical: 16
  },
  mainText: {
    fontSize: 12,
    margin: 20,
    ...allStyles.allFonts
  },
  headerContainer: {
    flexDirection: 'row',
    paddingRight: 12
  },
  conductTitle: {
    ...allStyles.allFonts,
    fontSize: 16,
    color: '#9963EA',
    marginBottom: 15
  },
  conductText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    marginBottom: 15
  }
})

export default styles