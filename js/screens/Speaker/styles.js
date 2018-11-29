import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  speakerContainer: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center'
  },
  speakerIcon: {
      marginLeft: 15
  },
  aboutSpeaker: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: -10,
    ...allStyles.allFonts
  },
  speakerHeader: {
    width: '100%'
  },  
  speakerInfo: {
      backgroundColor: 'white',
      marginBottom: 40,
      marginHorizontal: 20,
      width: '90%',
      borderRadius: 10
  },
  speakerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    alignSelf: 'center'
  },
  speakerTitle: {
      fontSize: 20,
      color: 'black',
      alignSelf: 'center',
      ...allStyles.allFonts,
      marginTop: 10
  },
  speakerBio: {
      fontSize: 14,
      margin: 10,
      fontFamily: 'Montserrat-Light',
      textAlign: 'justify'
  },
  button: {
      borderRadius: 35,
      marginTop: 10,
      marginBottom: 15,
      alignSelf: 'center'
  },
  buttonText: {
      fontSize: 15,
      color: 'white',
      padding: 20,
      borderRadius: 15,
      ...allStyles.allFonts
  }
})

export default styles