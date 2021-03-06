import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import ConductItem from '../../components/ConductItem'

const About = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/r10_logo.png')}
      />
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
        {data.map(data => (
          <ConductItem data={data} styles={styles} key={data.id} />
        ))}
      </View>
      <Text style={styles.creditsText}>&copy; RED Academy 2018</Text>
    </ScrollView>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired
}

export default About
