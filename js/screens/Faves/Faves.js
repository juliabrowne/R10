import React from 'react'
import { Text, View, ScrollView, Image, SectionList, Platform, TouchableHighlight, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import { formatSessionData } from '../../lib/formatSessionData'

const Faves = ({data, faveIds, navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SectionList
                style={styles.sectionList}
                renderItem={({item}) => (
                    <TouchableHighlight
                    key={item.id}
                    underlayColor={'#E6E6E6'}
                    activeOpacity={0.5}
                    onPress={onPress}
                    >
                    <View>
                      <Text style={styles.sessionTitle}>{item.title}</Text>
                      <Text style={styles.sessionLocation}>{item.location}</Text>
                      <FavsContext.Consumer>
                        {values => {
                          if (values.faveIds.includes(item.id))
                            return (
                              <Ionicons
                                style={styles.fav}
                                name={'ios-heart'}
                                size={15}
                                color={'#cf392a'}
                              />
                            )
                        }}
                      </FavsContext.Consumer>
                    </View>
                  </TouchableHighlight>
                )}

                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sessionTime}>{moment(title).format('h:mm A')}</Text>
                )}

        sections={data}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  )
}



Faves.propTypes = {
    data: PropTypes.array.isRequired,
    faveIds: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
}

export default Faves

























//     return (
//         <ScrollView style={styles.container}>
//             <StatusBar barStyle='light-content' />

//                 <SectionList
//                     style={styles.sectionList}
//                     renderItem={({item, index, section}) => (
//                         <TouchableHighlight
//                             activeOpacity={0.5}
//                             onPress={() => {
//                                 navigation.navigate('Session', {key: item.id})
//                             }}
//                         > 
//                             <View>
//                                 <Text style={styles.sessionTitle}>{item.title}</Text>

//                             <View style={styles.sessionLocationContainer}>
//                                 <Text style={styles.sessionLocation}>{item.location}</Text>
//                                 {props.faveIds.find(fave => fave === item.id) && (
//                                 <Ionicons
//                                     name={Platform.select({
//                                         ios: 'ios-heart',
//                                         android: 'md-heart'
//                                     })}
//                                     size={20}
//                                     color={'red'}
//                                     style={{paddingRight: 20}}
//                                 />
//                                 )}
//                             </View>
//                             </View>
//                         </TouchableHighlight>
//                     )}
                    
//                     renderSectionHeader={({section}) => (
//                         <Text style={styles.sessionTime}>
//                             {moment(section.title).format('h:mm a')}
//                         </Text>
//                     )}

//                     sections={props.data}
//                     keyExtractor={(item, index) => item + index}
//                 />

//         </ScrollView>
//     )
// }

    
// Faves.propTypes = {
//     sessions: PropTypes.array,
//     navigation: PropTypes.object,
// }                     

// export default Faves


