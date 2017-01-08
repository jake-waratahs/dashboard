import React from 'react'
import { connect } from 'react-redux'

import { updateWeather } from '../actions/weather'

const mapStateToProps = state => ({
    weather: state.weather
})

const mapDispatchToProps = {
    updateWeather: updateWeather
}

@connect(mapStateToProps, mapDispatchToProps)
export default class City extends React.Component {

    componentWillMount() {
        this.props.updateWeather(this.props.name)
    }

    render() {
        return <div className="eight wide column">      
            <h1>{this.props.name}: {this.props.weather[this.props.name]}</h1>
        </div>
    }
}