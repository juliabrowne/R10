import React, { Component } from 'react'
import Session from './Session'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext'
import { ActivityIndicator, Text } from 'react-native'
import styles from './styles'

const GET_SESSION = gql`
  query($id: ID) {
    Session(id: $id) {
      id
      description
      location
      title
      startTime
      speaker {
        bio
        id
        image
        name
        url
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
    const { id } = this.props.navigation.state.params
    return (
      <Query query={GET_SESSION} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator size='large' style={styles.loading} />
          if (error) return <Text>Error</Text>
          if (data)
            return (
              <FavesContext.Consumer>
                {(values) => {
                  console.log(values)
                  return (
                    <Session
                      session={data.Session}
                      navigation={this.props.navigation}
                      faveIds={values.faveIds}
                      createFave={values.createFave}
                      deleteFave={values.deleteFave}
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

export default SessionContainer
