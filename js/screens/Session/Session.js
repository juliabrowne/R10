import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableHighlight,
  StatusBar,
  Fragment
  // Modal
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import FavesContext from '../../context/FavesContext/FavesProvider'

// const Session = ({ session, faveIds, navigation }) => {

class Session extends Component {
  constructor() {
    super()
    this.state = {
      modal: false
    }
  }
  setModal(visible) {
    this.setState({ modal: visible })
  }
  render() {
    console.log(this.props)
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.sessionLocation}>
          {this.props.session.location}
        </Text>
        {this.props.faveIds.includes(this.props.session.id) ? (
          <Ionicons
            name={Platform.select({
              ios: 'ios-heart',
              android: 'md-heart'
            })}
            size={20}
            color={'red'}
          />
        ) : null}
        <Text style={styles.sessionTitle}>{this.props.session.title}</Text>
        <Text style={styles.sessionTime}>
          {moment(this.props.session.startTime).format('h:mm A')}
        </Text>
        <Text style={styles.sessionDescription}>
          {this.props.session.description}
        </Text>
        <Text style={styles.presentedBy}>Presented by:</Text>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate('Speaker', {
              id: this.props.session.speaker.id
            })
          }
        >
          {this.props.session.speaker ? (
            <View style={styles.sessionSpeaker}>
              <Image
                source={{ uri: this.props.session.speaker.image }}
                style={styles.sessionImage}
              />
              <Text style={styles.mainText}>
                {this.props.session.speaker.name}
              </Text>
            </View>
          ) : null}
        </TouchableHighlight>

        <View>
          <FavesContext.Consumer>
            {({ createFave, deleteFave }) => (
              <Fragment>
                {!this.props.faveIds.includes(this.props.session.id) ? (
                  <TouchableHighlight
                    title='Add to Faves'
                    onPress={() => createFave(this.props.session.id)}
                  >
                    <LinearGradient
                      style={styles.button}
                      colors={['#8797D6', '#9963ea']}
                      start={{ x: 1.0, y: 1.0 }}
                      end={{ x: 0.0, y: 0.0 }}
                    />
                    <Text style={styles.buttonText}>Add to Faves</Text>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    title='Remove from Faves'
                    onPress={() => deleteFave(this.props.session.id)}
                  >
                    <LinearGradient
                      style={styles.button}
                      colors={['#8797D6', '#9963ea']}
                      start={{ x: 1.0, y: 1.0 }}
                      end={{ x: 0.0, y: 0.0 }}
                    />
                    <Text style={styles.buttonText}>Remove from Faves</Text>
                  </TouchableHighlight>
                )}
              </Fragment>
            )}
          </FavesContext.Consumer>
        </View>
      </ScrollView>
    )
  }
}

Session.propTypes = {
  // navigation: PropTypes.object.isRequired,
  // addFave: PropTypes.func.isRequired,
  // removeFave: PropTypes.func.isRequired,
  // faveIds: PropTypes.array.isRequired
}

export default Session
