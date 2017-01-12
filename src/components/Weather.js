import React from 'react'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions/weather'

import Loading from './Loading'

const mapStateToProps = state => ({
    weather: {...state.weather}
})

const mapDispatchToProps = {
    fetchWeather: fetchWeather
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Weather extends React.Component {

    componentWillMount() {
        this.props.fetchWeather(this.props.city)
        // Update weather every 30 mins
        setTimeout(() => {this.componentWillMount()}, 30 * 60 * 1000)
    }

    render() {
        if (!this.props.weather[this.props.city] || 
            this.props.weather[this.props.city].isFetching ||
            this.props.weather[this.props.city].error) {
            return <Loading />
        } else {
            return <div className="ui segment">
                <div className="ui items">
                    <div className="item">
                        <div className="ui tiny image">
                            <img src={`http://openweathermap.org/img/w/${this.props.weather[this.props.city].weather.icon}.png`} />
                        </div>
                        <div className="middle aligned content">
                            <div className="header">{this.props.weather[this.props.city].weather.curr}&deg;C</div>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
}