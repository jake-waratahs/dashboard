import React from 'react'

import Weather from './Weather'
import News from './News'

export default class City extends React.Component {

    render() {
        return <div className="six wide column">      
            <h1 className="ui header">{this.props.name}</h1>
            <Weather city={this.props.name} />
            <News source={this.props.news} />
        </div>
    }
}