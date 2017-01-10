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
    }

    render() {
        return <div>
            {(() => {
                if (!this.props.weather[this.props.city] || 
                    this.props.weather[this.props.city].isFetching ||
                    this.props.weather[this.props.city].error) {
                    return <Loading />
                } else {
                    return <div className="ui items">
                        <div className="item">
                            <div className="image">
                                {/* image here*/}
                            </div>
                            <div className="content">{this.props.weather[this.props.city].weather.curr}&deg;C</div>
                        </div>
                    </div>
                }
            })()}
        </div>
    }
}