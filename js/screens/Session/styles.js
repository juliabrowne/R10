import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  sectionList: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    ...allStyles.allFonts
  },
  sessionTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    ...allStyles.allFonts
  },
  sessionLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  sessionLocation: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999999'
  },
  sessionTime: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#e6e6e6',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  sessionImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})

export default styles