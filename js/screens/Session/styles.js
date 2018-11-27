import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
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
    ...allStyles.allFonts,
    paddingLeft: 20,
    paddingRight: 20
  },
  sessionLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10
  },
  sessionLocation: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999999',
    padding: 20,
    ...allStyles.allFonts
  },
  sessionTime: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    ...allStyles.allFonts
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
    borderRadius: 50,
  },
  sessionSpeaker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    paddingBottom: 20,
    ...allStyles.allFonts
  },
  presentedBy: {
    fontSize: 16,
    padding: 20,
    color: "grey",
    fontWeight: "600",
    ...allStyles.allFonts
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    borderRadius: 80
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    ...allStyles.allFonts,
  },
  sessionDescription: {
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat-Light'
  },
})

export default styles
