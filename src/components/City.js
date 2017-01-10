import React from 'react'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions/weather'

const mapStateToProps = state => ({
    weather: {...state.weather}
})

const mapDispatchToProps = {
    fetchWeather: fetchWeather
}

@connect(mapStateToProps, mapDispatchToProps)
export default class City extends React.Component {

    componentWillMount() {
        this.props.fetchWeather(this.props.name)
    }

    render() {
        return <div className="eight wide column">      
            <h1>{this.props.name}: 
                {(() => {
                    if (this.props.weather[this.props.name] && 
                        !this.props.weather[this.props.name].isFetching &&
                        !this.props.weather[this.props.name].error) {
                        return this.props.weather[this.props.name].weather.curr
                    }
                })()}
            </h1>
        </div>
    }
}