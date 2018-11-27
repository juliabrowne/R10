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
    color: '#cf392a',
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
    marginTop: 10,
    marginLeft: 20
  },
  sessionSpeakerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  sessionSpeaker: {
    marginLeft: 20,
    marginTop: 50,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    paddingBottom: 40,
    ...allStyles.allFonts
  },
  presentedBy: {
    fontSize: 16,
    padding: 20,
    color: 'grey',
    fontWeight: '600',
    ...allStyles.allFonts
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
    padding: 10,
    borderRadius: 80,
    width: 200,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    ...allStyles.allFonts
  },
  sessionDescription: {
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat-Light'
  },
  locationHeartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

export default styles
