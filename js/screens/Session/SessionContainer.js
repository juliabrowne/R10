import React, { Component } from 'react'
import Session from './Session'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext/FavesProvider'
import { ActivityIndicator } from 'react-native'

const GET_SESSION = gql`
    query sessions($id: ID!) {
        allSessions(id: $id) {
            id
            description
            title
            startTime
            speaker {
                name
                image
                bio
                id
            }
        }
    }
`

class SessionContainer extends Component {
    static navigationOptions = {
        title: 'Session',
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'Montserrat-Regular'
        }
    }
    render () {
        return (
            <Query query={GET_SESSION}
            variables={{id: this.props.navigation.getParam('id')}}
            >
            {({loading, error, data: {Session}}) => {
                if(loading) return <ActivityIndicator />
                if(error) return <Text>Error</Text>
                return (
                    <FavesContext.Consumer>
                        {values => {
                            return (
                                <Session 
                                    data={Session}
                                    navigation={this.props.navigation}
                                    addFave={values.addFave}
                                    removeFave={values.removeFave}
                                    faveIds={values.faveIds}
                                />
                            )
                        }}
                    </FavesContext.Consumer>
                )
            }}
        </Query>
        )
    }
}

SessionContainer.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default SessionContainer



