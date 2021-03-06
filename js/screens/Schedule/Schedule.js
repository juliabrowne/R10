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
import { withNavigation } from 'react-navigation'

const Schedule = ({ sessions, navigation, faveIds }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SectionList
        style={styles.sectionList}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            underlayColor={'#E6E6E6'}
            onPress={() => {
              if (item.title !== 'Lunch' && item.title !== 'After Party') {
                navigation.navigate('Session', { id: item.id })
              }
            }}
          >
            <View style={styles.scheduleBreak}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <View style={styles.sessionLocationContainer}>
                <Text style={styles.sessionLocation}>{item.location}</Text>
                {faveIds.includes(item.id) && (
                  <Ionicons
                    name={Platform.select({
                      ios: 'ios-heart',
                      android: 'md-heart'
                    })}
                    size={20}
                    color={'#cf392a'}
                    style={{ paddingLeft: 20 }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sessionTime}>
            {moment(section.title).format('h:mm A')}
          </Text>
        )}
        sections={sessions}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  )
}

Schedule.propTypes = {
  id: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string
}

export default withNavigation(Schedule)
