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
import { formatSessionData } from '../../lib/formatSessionData'

const Faves = ({ faves, faveIds, navigation }) => {
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
              navigation.navigate('Session', { id: item.id });
            }}
          >
            <View>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionLocation}>{item.location}</Text>
                <Ionicons
                      name={Platform.select({
                        ios: 'ios-heart',
                        android: 'md-heart'
                      })}
                      size={20}
                      color={'red'}
                      style={{ paddingRight: 20 }}
                  />
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sessionTime}>
            {moment(title).format('h:mm A')}
          </Text>
        )}
        sections={faves}
        keyExtractor={item, index => item + index}
      />
    </ScrollView>
  )
}

Faves.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Faves