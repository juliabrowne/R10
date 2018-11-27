import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  },
  image: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    ...allStyles.allFonts,
    margin: 10
  },
  mainText: {
    fontSize: 14,
    margin: 10,
    fontFamily: 'Montserrat-Light'
  },
  headerContainer: {
    flexDirection: 'row',
    paddingRight: 15
  },
  conductTitle: {
    ...allStyles.allFonts,
    fontSize: 16,
    color: '#9963EA',
    marginBottom: 15
  },
  conductText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    marginBottom: 15
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})

export default styles
