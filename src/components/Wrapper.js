import React from 'react'

export default class Wrapper extends React.Component {

    render() {
        return <div className="ui centered grid">
            { this.props.children }
        </div> 
    }

}