import React from 'react'

export default class Image extends React.Component {
    render() {
        setTimeout(60 * 1000, () => this.forceUpdate())
        return <div className="six wide column">
            <img src={this.props.src + `?q=${new Date()}`} />
        </div>
    }
}