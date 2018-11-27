import React from 'react'
import {
  Text,
  View,
  ScrollView,
  SectionList,
  Platform,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import { formatSessionData } from '../../lib/formatSessionData'

const Faves = ({ faves, faveIds, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SectionList
        style={styles.favesList}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor={'#E6E6E6'}
            onPress={() => {
              navigation.navigate('Session', { id: item.id })
            }}
          >
            <View style={styles.favesBreak}>
              <Text style={styles.favesTitle}>{item.title}</Text>
              <View style={styles.favesInfoHeart}>
                <Text style={styles.favesLocation}>{item.location}</Text>
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
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.favesTime}>{moment(title).format('h:mm A')}</Text>
        )}
        sections={faves}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  )
}

Faves.propTypes = {
  id: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Faves
