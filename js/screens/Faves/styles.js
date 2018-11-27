import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  favesList: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    ...allStyles.allFonts
  },
  favesBreak: {
    borderColor: '#E6E6E6',
    borderWidth: 0.5,
    padding: 15,
  },
  favesTitle: {
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: '600',
    ...allStyles.allFonts,
  },
  favesLocation: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 5,
    color: '#999999',
    ...allStyles.allFonts,
  },
  favesTime: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#e6e6e6',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    ...allStyles.allFonts,
  },
  favesInfoHeart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 'auto'
  },  
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})

export default styles