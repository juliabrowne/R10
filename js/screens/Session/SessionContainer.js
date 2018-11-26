import React, { Component } from 'react'
import Session from './Session'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext/FavesProvider'
import { ActivityIndicator, Text } from 'react-native'
import styles from './styles'

const GET_SESSION = gql`
  query sessions($id: ID!) {
    allSessions(sessions: $id) {
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
  render() {
    console.log(this.props)
    const { id } = this.props.navigation.state.params
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => {
          return (
            <Query query={GET_SESSION} variables={{ id: { id_in: id } }}>
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <ActivityIndicator size='large' style={styles.loading} />
                  )
                if (error) return <Text>Error</Text>
                if (data)
                  return (
                    <Session
                      sessions={data.allSessions}
                      navigation={this.props.navigation}
                      faveIds={faveIds}
                    />
                  )
              }}
            </Query>
          )
        }}
      </FavesContext.Consumer>
    )
  }
}

export default SessionContainer
