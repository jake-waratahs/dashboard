import React from 'react'

export default class Loading extends React.Component {
    render() {
        return <div className="ui active inverted dimmer">
            <div className="ui loader"></div>
        </div>
    }
}