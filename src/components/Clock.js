import React from 'react'
import moment from 'moment-timezone'

export default class Clock extends React.Component {

    render() {
        setTimeout(() => this.forceUpdate(), 60 * 1000)

        return <div>
            <p>{moment().tz(this.props.timezone).format('h:mm a MMMM Do')}</p>
        </div>
    }
}