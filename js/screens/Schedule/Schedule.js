import React from 'react'
import { Text, View, ScrollView, Image, SectionList, Platform, TouchableHighlight, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { withNavigation } from 'react-navigation'
import moment from 'moment'
import PropTypes from 'prop-types'

const Schedule = props => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle='light-content' />
                {/* <SectionList
                    style={styles.sectionList}
                    renderItem={({item, index, section}) => (
                        <TouchableHighlight
                            activeOpacity={0.5}
                            underlayColor={'grey'}
                            onPress={() => {
                                navigation.navigate('Session', {key: item.id})
                            }}
                        > 
                            <View>
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
                                    style={{paddingRight: 20}}
                                />
                                )}
                            </View>
                            </View>
                        </TouchableHighlight>
                    )}
                    
                    renderSectionHeader={({section}) => (
                        <Text style={styles.sessionTime}>
                            {moment(section.title).format('h:mm a')}
                        </Text>
                    )}

                    sections={props.data}
                    keyExtractor={(item, index) => item + index}
                /> */}
        </ScrollView>
    )
}

    
Schedule.propTypes = {
    sessions: PropTypes.array,
    navigation: PropTypes.object
}                     

export default withNavigation(Schedule)