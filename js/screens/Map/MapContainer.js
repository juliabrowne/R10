import React, { Component } from 'react'
import Map from './Map'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'

export default class MapContainer extends Component {
    static navigationOptions = {
        title: 'Map',
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Regular'
        }
    }
    render () {
    return ( 
        <Map /> 
    // render() {
    //     return (
    //         <Query 
    //             query={gql`
    //             {
    //                 allConducts {
    //                     id
    //                     title
    //                     description
    //                 }
    //             }
    //         `} >

    //         {({ data: { allConducts }, loading, error}) => {
    //             if(loading) return <ActivityIndicator />
    //             if(error) return <Text>Error</Text>

    //             return <About data={allConducts} />
    //         }}
    //         </Query>
        // )
    // }
    )}
    }