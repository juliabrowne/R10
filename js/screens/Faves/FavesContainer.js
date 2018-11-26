import React, { Component } from 'react'
import Faves from './Faves'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext/FavesProvider'
import { ActivityIndicator, Text } from 'react-native'
import PropTypes from 'prop-types'

const GET_FAVES = gql`
    query faves($id: SessionFilter)
    {
        allSessions(filter: $id) {
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
    
    sessionNav = id => {
        this.props.navigation.navigate('Session', {id: id})
    }

    render() {
        return (
            <Query query={GET_FAVES}>
                {({loading, error, data: {allSessions}}) => {
                    if(loading) return <ActivityIndicator />
                    if(error) return <Text>Error</Text>
                    return (
                        <FavesContext.Consumer>
                            {values => {
                                return <Faves data={allSessions} 
                                              faveIds={values.faveIds}
                                              navigation={id => this.sessionNav(id)} />
                            }}
                        </FavesContext.Consumer>
                    )
                }}
            </Query>
        )
    }
}

FavesContainer.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default FavesContainer





//     render () {
//         return (
//             <FavesContext.Consumer>
//                 {({faveIds}) => {
//                     return (
//                         <Query query={GET_FAVES} variables={{id: {id_in: faveIds}}}>
//                             {({loading, error, data}) => {
//                                 if(loading) return <ActivityIndicator />
//                                 if(error) return <Text>Error</Text>
//                                 return <Faves data={data} navigation={this.props.navigation} faveIds={faveIds} />
//                             }}
//                         </Query>
//                     )
//                 }}
//             </FavesContext.Consumer>
//         )
//     }
// }

// export default FavesContainer