import React, { Component } from 'react'
import Speaker from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ActivityIndicator, Text } from 'react-native'

const GET_SPEAKER = gql`
    {
        allSessions(filter: $ids) {
            id
            speaker {
                name
                image
                bio
                url
                id
            }
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
    render () {
    return ( 
        <Query query={GET_SPEAKER}>
            {({loading, error, data}) => {
                if(loading) return <ActivityIndicator />
                if(error) return <Text>Error</Text>
                return <Speaker data={data} />
            }}
        </Query>
    )
  }
}

export default SpeakerContainer






