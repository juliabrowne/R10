import React, { Component } from 'react'
import Speaker from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ActivityIndicator, Text } from 'react-native'
import styles from './styles'

const GET_SPEAKER = gql`
query($id: ID) {
  Speaker(id: $id)  {
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
    const speakerId = this.props.navigation.getParam('id');
    console.log(speakerId)
    return (
      <Query
        query={GET_SPEAKER}
        variables={{id: speakerId}}
      >
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator size='large' style={styles.loading} />
          if (error) return <Text>Error</Text>
          return <Speaker speaker={data.Speaker} />
        }}
      </Query>
    )
  }
}

export default SpeakerContainer
