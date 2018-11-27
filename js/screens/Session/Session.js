import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

const Session = ({ session, createFave, deleteFave, faveIds, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.locationHeartContainer}>
        <Text style={styles.sessionLocation}>{session.location}</Text>
        {faveIds.includes(session.id) ? (
          <Ionicons
            name={Platform.select({
              ios: 'ios-heart',
              android: 'md-heart'
            })}
            size={20}
            color={'#cf392a'}
            paddingLeft={20}
            styles={styles.heart}
          />
        ) : null}
      </View>
      <Text style={styles.sessionTitle}>{session.title}</Text>
      <Text style={styles.sessionTime}>
        {moment(session.startTime).format('h:mm A')}
      </Text>
      <Text style={styles.sessionDescription}>{session.description}</Text>
      <Text style={styles.presentedBy}>Presented by:</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Speaker', { id: session.speaker.id })
        }
      >
        {session.speaker ? (
          <View style={styles.sessionSpeakerContainer}>
            <Image
              source={{ uri: session.speaker.image }}
              style={styles.sessionImage}
            />
            <Text style={styles.sessionSpeaker}>{session.speaker.name}</Text>
          </View>
        ) : null}
      </TouchableOpacity>

      {!faveIds.includes(session.id) ? (
        <TouchableOpacity
          title='Add to Faves'
          onPress={() => createFave(session.id)}
        >
          <LinearGradient
            style={styles.button}
            colors={['#8797D6', '#9963ea']}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
          >
            <Text style={styles.buttonText}>Add to Faves</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          title='Remove from Faves'
          onPress={() => deleteFave(session.id)}
        >
          <LinearGradient
            style={styles.button}
            colors={['#8797D6', '#9963ea']}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
          >
            <Text style={styles.buttonText}>Remove from Faves</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}

Session.propTypes = {
  // navigation: PropTypes.object.isRequired,
  // addFave: PropTypes.func.isRequired,
  // removeFave: PropTypes.func.isRequired,
  // faveIds: PropTypes.array.isRequired
}

export default Session
