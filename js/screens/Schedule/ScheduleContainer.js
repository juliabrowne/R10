import React, { Component } from 'react'
import Schedule from './Schedule'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'

export default class ScheduleContainer extends Component {
    render () {
    return ( 
        <Schedule /> 
    // static navigationOptions = {
    //     title: 'About'
    // };
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