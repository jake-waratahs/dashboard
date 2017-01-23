import React from 'react'

export default class Image extends React.Component {
    render() {
        
        // Fetch the image every two minutes
        setTimeout(() => this.forceUpdate(), 2 * 60 * 1000)

        return <div className="six wide column">
            <img src={this.props.src + `?q=${new Date()}`} />
        </div>
    }
}