import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableHighlight,
  StatusBar,
  // Modal
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
// import FavesContext from '../../context/FavesContext/FavesProvider'

const Session = ({ data, addFave, deleteFave, faveIds, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.sessionLocation}>{data.location}</Text>
      {faveIds.includes(data.id) ? (
        <Ionicons
          name={Platform.select({
            ios: 'ios-heart',
            android: 'md-heart'
          })}
          size={20}
          color={'red'}
        />
      ) : null}
      <Text style={styles.sessionTitle}>{data.title}</Text>
      <Text style={styles.sessionTime}>
        {moment(data.startTime).format('h:mm A')}
      </Text>
      <Text style={styles.mainText}>{data.description}</Text>
      <Text>Presented by:</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Speaker', { id: data.speaker.id })}
      >
        {data.speaker ? (
          <View style={styles.sessionSpeaker}>
            <Image
              source={{ uri: data.spaker.image }}
              style={styles.sessionImage}
            />
            <Text style={styles.mainText}>{data.speaker.name}</Text>
          </View>
        ) : null}
      </TouchableHighlight>

      <View>
        {!faveIds.includes(data.id) ? (
          <TouchableHighlight
            title='Add to Faves'
            onPress={() => addFave(data.id)}
          >
            <LinearGradient
              style={styles.button}
              colors={['#8797D6', '#9963ea']}
              start={{ x: 1.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }}
            >
              <Text style={styles.buttonText}>Add to Faves</Text>
            </LinearGradient>
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            title='Remove from Faves'
            onPress={() => removeFave(data.id)}
          >
            <LinearGradient
              style={styles.button}
              colors={['#8797D6', '#9963ea']}
              start={{ x: 1.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }}
            >
              <Text style={styles.buttonText}>Remove from Faves</Text>
            </LinearGradient>
          </TouchableHighlight>
        )}
      </View>
    </ScrollView>
  )
}

Session.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  addFave: PropTypes.func.isRequired,
  removeFave: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired
}

export default Session