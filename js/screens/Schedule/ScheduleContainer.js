// import React, { Component } from 'react'
// import Schedule from './Schedule'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
// import FavesContext from '../../context/FavesContext/FavesProvider'
// import { ActivityIndicator } from 'react-native'

// const GET_SCHEDULE = gql`
//     {
//         allSessions {
//             id
//             description
//             location
//             speaker {
//                 name
//                 image
//                 bio
//                 url
//                 id
//             }
//             startTime
//             title
//         }
//     }
// `

// class ScheduleContainer extends Component {
//     constructor() {
//         super()
//     }
//     static navigationOptions = {
//         title: 'Schedule',
//         headerTitleStyle: {
//             color: 'white',
//             fontFamily: 'Montserrat-Regular'
//         }
//     }
//     render () {
//         return (
//             <FavesContext.Consumer>
//             {({faveIds}) => {
//                 return (
//                     <Query query={GET_SCHEDULE}>
//                         {({loading, error, data}) => {
//                             if(loading) return <ActivityIndicator />
//                             if(error) return <Text>Error</Text>
//                             return <Schedule data={data} navigation={this.props.navigation} faveIds={faveIds} />
//                         }}
//                     </Query>
//                 )
//             }}
//             </FavesContext.Consumer>
//         )
//     }
// }

// export default ScheduleContainer



import React, { Component } from 'react'
import Schedule from './Schedule'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'
import { formatSessionData } from '../../lib/formatSessionData'
import PropTypes from 'prop-types'

export const ALL_SESSIONS_QUERY = gql`
  {
    allSessions {
      id
      title
      startTime
      location
      description
    }
  }
`
export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  }
  sessionNav = id => {
    this.props.navigation.navigate('Session', { id: id })
  }
  render() {
    return (
      <Query query={ALL_SESSIONS_QUERY}>
        {({ data: { allSessions }, loading, error }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error :</Text>
          return (
            <Schedule
              data={formatSessionData(allSessions)}
              nav={id =>
                allSessions.find(session => session.id === id).description
                  ? this.sessionNav(id)
                  : null
              }
            />
          )
        }}
      </Query>
    )
  }
}

ScheduleContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}