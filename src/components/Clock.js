import React from 'react'
import moment from 'moment-timezone'

const style = {
    fontSize: '2em'
}

export default class Clock extends React.Component {

    render() {
        setTimeout(() => this.forceUpdate(), 60 * 1000)

        return <div>
            <h3 className="ui inverted header" style={style}>{moment().tz(this.props.timezone).format('h:mm a, MMMM Do YYYY')}</h3>
        </div>
    }
}