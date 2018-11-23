import React from 'react'
import { Text, View, ScrollView, Image, FlatList } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const About = props => {
    return(
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={'../../assets/images/r10_logo.png'} />
                <View>
                <Text style={styles.mainText}>
                    R10 is a conference that focuses on just about any topic related to
                    dev.
                </Text>
                <Text style={styles.headerText}>Date & Venue</Text>
                <Text style={styles.mainText}>
                    The R10 conference will take place on Tuesday, August 28, 2018 in
                    Vancouver, BC.
                </Text>
                <Text style={styles.headerText}>Code of Conduct</Text>

                    <FlatList
                        data={props.data.allConducts}
                        renderItem={({item}) => (
                            <View>
                                <Text style={styles.headerText}>{item.title}</Text>
                                <Text style={styles.mainText}>{item.description}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index + ''}
                    />
                </View>
            <Text style={styles.mainText}>&copy; RED Academy 2018</Text>
        </ScrollView>
    )
}

About.propTypes = {}
  
export default About