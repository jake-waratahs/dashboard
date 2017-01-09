import React from 'react'

export default class Wrapper extends React.Component {

    render() {
        return <div className="ui grid">
            { this.props.children }
        </div> 
    }

}