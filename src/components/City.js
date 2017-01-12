import React from 'react'

import Weather from './Weather'
import News from './News'
import Clock from './Clock'

export default class City extends React.Component {

    render() {
        return <div className="six wide column">      
            <h1 className="ui inverted header">{this.props.name}</h1>
            <Clock timezone={this.props.timezone} />
            <Weather city={this.props.name} />
            <News source={this.props.news} />
        </div>
    }
}