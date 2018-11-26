import React, { Component } from 'react'
import Speaker from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ActivityIndicator, Text } from 'react-native'
import styles from './styles'

const GET_SPEAKER = gql`
  query Speaker($id: ID!) {
    speaker {
      name
      image
      bio
      url
      id
    }
  }
`

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker',
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'Montserrat'
    }
  }
  render() {
    return (
      <Query
        query={GET_SPEAKER}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator size='large' style={styles.loading} />
          if (error) return <Text>Error</Text>
          return <Speaker data={data.Speaker} />
        }}
      </Query>
    )
  }
}

export default SpeakerContainer
