import React from 'react'
import {
  Text,
  View,
  ScrollView,
  SectionList,
  Platform,
  TouchableHighlight,
  StatusBar
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import moment from 'moment'
import PropTypes from 'prop-types'

const Schedule = ({ sessions, navigation, faveIds }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SectionList
        style={styles.sectionList}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={"#E6E6E6"}
            onPress={() => {
              navigation.navigate('Session', { key: item.id });
            }}
          >
            <View style={styles.scheduleBreak}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <View style={styles.sessionLocationContainer}>
                <Text style={styles.sessionLocation}>{item.location}</Text>
                {faveIds.find(fave => fave === item.id) && (
                  <Ionicons
                    name={Platform.select({
                      ios: 'ios-heart',
                      android: 'md-heart'
                    })}
                    size={20}
                    color={'red'}
                    style={{ paddingRight: 20 }}
                  />
                )}
              </View>
            </View>
          </TouchableHighlight>
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
  );
};

Schedule.propTypes = {
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Schedule