import { StyleSheet } from 'react-native'
import allStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...allStyles.allFonts
  },
  speakerContainer: {
      flex: 1,
      backgroundColor: 'black'
  },
  speakerIcon: {
      marginLeft: 15
  },
  mainText: {
    fontSize: 12,
    alignSelf: 'center',
    margin: 20,
  },
  speakerInfo: {
      backgroundColor: 'white',
      marginBottom: 40,
      marginHorizontal: 20,
      borderRadius: 10
  },
  speakerImage: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      borderRadius: 75
  },
  speakerTitle: {
      fontSize: 30,
      color: 'white',
      paddingLeft: 20,
      alignSelf: 'center'
  },
  speakerBio: {
      fontSize: 15,
      margin: 20
  },
  button: {
      margin: 30,
      borderRadius: 15,
      alignSelf: 'center'
  },
  buttonText: {
      fontSize: 15,
      color: 'white',
      padding: 20,
      borderRadius: 15
  }
})

export default styles