import React, { Component } from 'react'
import Schedule from './Schedule'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
// import { FavesContext } from '../../context/FavesContext'
import { ActivityIndicator } from 'react-native'

const GET_SCHEDULE = gql`
    {
        allSessions {
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

class ScheduleContainer extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: 'Schedule',
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'Montserrat-Regular'
        }
    }
    render () {
        return (
            // <FavesContext.Consumer>
                <Query query={GET_SCHEDULE}>
                    {({loading, error, data}) => {
                        if(loading) return <ActivityIndicator />
                        if(error) return <Text>Error</Text>
                        return <Schedule data={data} navigation={this.props.navigation} />
                    }}
                </Query>
            // </FavesContext.Consumer>
        )
    }
}

export default ScheduleContainer