import React, { Component } from 'react'
import Speaker from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ActivityIndicator, Text } from 'react-native'
import PropTypes from 'prop-types'

const GET_SPEAKER = gql`
    query Speaker($id: ID!){
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
    render () {
    return ( 
        <Query query={GET_SPEAKER}
        variables={{id: this.props.navigation.getParam('id')}}>
            {({loading, error, data: {Speaker}}) => {
                if(loading) return <ActivityIndicator />
                if(error) return <Text>Error</Text>
                return <Speaker data={Speaker} />
            }}
        </Query>
    )
  }
}

SpeakerContainer.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default SpeakerContainer