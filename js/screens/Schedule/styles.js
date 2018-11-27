import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  scheduleBreak: {
    borderColor: '#E6E6E6',
    borderWidth: 0.5,
    padding: 15,
  },
  sessionTitle: {
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: '600',
    ...allStyles.allFonts,
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
    paddingLeft: 5,
    color: '#999999',
    ...allStyles.allFonts,
  },
  sessionTime: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#e6e6e6',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    ...allStyles.allFonts,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})

export default styles