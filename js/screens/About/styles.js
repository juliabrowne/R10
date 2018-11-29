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
    fontFamily: 'Montserrat-Light',
    textAlign: 'justify'
  },
  creditsText: {
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
    ...allStyles.allFonts,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingRight: 15
  },
  conductTitle: {
    ...allStyles.allFonts,
    fontSize: 16,
    color: '#9963EA',
    marginBottom: 15,
    marginRight: 10
  },
  conductText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    margin: 10,
    textAlign: 'justify'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})

export default styles
