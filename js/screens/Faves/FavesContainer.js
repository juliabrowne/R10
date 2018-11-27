import React, { Component } from 'react'
import Faves from './Faves'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext/FavesProvider'
import { ActivityIndicator, Text } from 'react-native'
import { formatSessionData } from '../../lib/formatSessionData'
import styles from './styles'

const GET_FAVES = gql`
  query allSessions($filter: SessionFilter) {
    allSessions(filter: $filter) {
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
  static navigationOptions = {
    title: 'Faves',
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'Montserrat-Regular'
    }
  }
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query query={GET_FAVES} variables={{ filter: { id_in: faveIds.map(fave => fave.id) } }}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size='large' style={styles.loading} />
              if (error) return <Text>Error</Text>
              if (data) {
                console.log(data)
                return (
                  <Faves
                    faves={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    faveIds={faveIds.map(fave => fave.id)}
                  />
                )
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    )
  }
}

export default FavesContainer
