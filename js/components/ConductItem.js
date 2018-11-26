import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

// code obtained from tutorial on how to create animations with react native
// https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/

class ConductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
        this.icons = {
            open: 'add',
            close: 'remove'
        }
    }

    _toggleItem() {
        if (!this.state.height) this.state.height = new Animated.Value(0)
        
        let start = this.state.expand ? this.state.maxHeight : 0,
        end = this.state.expand ? 0 : this.state.maxHeight

        this.setState({
            expand: !this.state.expand
        })

        this.state.height.setValue(start)
        Animated.timing(this.state.height, {toValue: end}).start()
    }

    _setMaxHeight(event) {
        if (
            this.state.maxHeight === undefined ||
            event.nativeEvent.layout.height >= this.state.maxHeight
        ) {
            this.setState ({
                maxHeight: event.nativeEvent.layout.height
            })
        }
        if (!this.state.height) this.setState({height: new Animated.Value(0)})
    }

    render() {
        let icon = (icon = this.icons['open'])
        if (this.state.expand) {
            icon = this.icons['close']
        }
        return (
            <View>
                <TouchableOpacity onPress={() => this._toggleItem()}>
                    <View style={this.props.styles.headerContainer}>
                        <Ionicons  
                            name={Platform.select({
                                ios: `ios-${icon}`,
                                android: `md-${icon}`})}
                            size={15}
                            color={'#9963ea'}
                            style={{paddingRight: 20}}
                        />
                        <Text style={this.props.styles.conductTitle}>{this.props.data.title}</Text>
                    </View>
                </TouchableOpacity>

                <Animated.View style={{height: this.state.height}}>
                    <View onLayout={event => this._setMaxHeight(event)}>
                        <Text style={this.props.styles.conductText}>
                            {this.props.data.description}
                        </Text>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

ConductItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ConductItem