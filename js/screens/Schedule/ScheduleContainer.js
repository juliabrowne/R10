import React, { Component } from 'react'
import Schedule from './Schedule'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext'
import { ActivityIndicator, Text } from 'react-native'
import { formatSessionData } from '../../lib/formatSessionData'
import styles from './styles'

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
  static navigationOptions = {
    title: 'Schedule',
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'Montserrat-Regular'
    }
  };
  render() {
    return (
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size='large' style = {styles.loading} />
          if (error) return <Text>Error</Text>
          if (data) {
            return (
              <FavesContext.Consumer>
                {({ faveIds }) => (
                  <Schedule
                    sessions={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    faveIds={faveIds}
                  />
                )}
              </FavesContext.Consumer>
            )
          }
        }}
      </Query>
    )
  }
}

export default ScheduleContainer