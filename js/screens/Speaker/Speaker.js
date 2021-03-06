import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
  Linking
} from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'

const Speaker = ({ speaker, navigation }) => {
  // code below obtained from react native docs on linking
  // https://facebook.github.io/react-native/docs/linking
  readMore = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url)
        } else {
          return Linking.openURL(url)
        }
      })
      .catch(err => console.error('An error occurred', err))
  }
  return (
    <ScrollView>
      <View style={styles.speakerContainer}>
        <View style={styles.speakerHeader}>
          <Ionicons
            name={Platform.select({
              ios: 'ios-close',
              android: 'md-close'
            })}
            style={styles.speakerIcon}
            size={30}
            color='white'
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.aboutSpeaker}>About the Speaker:</Text>
        </View>
        <View style={styles.speakerInfo}>
          <Image style={styles.speakerImage} source={{ uri: speaker.image }} />
          <Text style={styles.speakerTitle}>{speaker.name}</Text>
          <Text style={styles.speakerBio}>{speaker.bio}</Text>
          <TouchableOpacity onPress={() => readMore(speaker.url)}>
            <LinearGradient
              style={styles.button}
              colors={['#8797D6', '#9963ea']}
              start={{ x: 1.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }}
            >
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

Speaker.propTypes = {
  data: PropTypes.object
}

export default Speaker
