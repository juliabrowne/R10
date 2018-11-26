import React, { Component } from 'react'
import Faves from './Faves'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext/FavesProvider'
import { ActivityIndicator, Text } from 'react-native'

const GET_FAVES = gql`
    query faves($ids: SessionFilter)
    {
        allSessions(filter: $ids) {
            id
            description
            location
            speaker {
                name
                image
                bio
                url
                id
            }
            startTime
            title
        }
    }
`

class FavesContainer extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: 'Faves',
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'Montserrat-Regular'
        }
    }
    render () {
        return (
            <FavesContext.Consumer>
                {({faveIds}) => {
                    return (
                        <Query query={GET_FAVES} variables={{ids: {id_in: faveIds}}}>
                            {({loading, error, data}) => {
                                if(loading) return <ActivityIndicator />
                                if(error) return <Text>Error</Text>
                                return <Faves data={data} navigation={this.props.navigation} faveIds={faveIds} />
                            }}
                        </Query>
                    )
                }}
            </FavesContext.Consumer>
        )
    }
}

export default FavesContainer