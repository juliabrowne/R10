import React, { Component } from 'react'
import About from './About'
import { ActivityIndicator } from 'react-native'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styles from './styles'

const GET_CONDUCTS = gql`
  {
    allConducts {
      id
      title
      description
    }
  }
`

class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'Montserrat'
    }
  }
  render() {
    return (
      <Query query={GET_CONDUCTS}>
        {({ loading, error, data: { allConducts } }) => {
          if (loading) return <ActivityIndicator style={styles.loading} />
          if (error) return <Text>Oops, there's an error!</Text>
          return <About data={allConducts} />
        }}
      </Query>
    )
  }
}

export default AboutContainer
