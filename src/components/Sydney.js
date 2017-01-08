import React from 'react'
import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//     temperature: state.weather.syd
// })

// @connect(mapStateToProps, {})
export default class Sydney extends React.Component {
    render() {
        return <div className="eight wide column">      
            <h1>Sydney</h1>
        </div>
    }
}