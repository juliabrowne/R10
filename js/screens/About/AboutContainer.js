import React, { Component } from 'react'
import About from './About'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'

export default class AboutContainer extends Component {
    static navigationOptions = {
        title: 'About',
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Regular'
        }
    }
    render () {
    return ( 
        <About /> 
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