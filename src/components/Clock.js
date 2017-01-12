import React from 'react'
import moment from 'moment-timezone'

export default class Clock extends React.Component {

    render() {
        setTimeout(() => this.forceUpdate(), 60 * 1000)

        return <div className="ui segment">
            <h3 className="ui heading">{moment().tz(this.props.timezone).format('h:mm a, MMMM Do YYYY')}</h3>
        </div>
    }
}