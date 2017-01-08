import React from 'react'
import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//     temperature: state.weather.sfo
// })

// @connect(mapStateToProps, {})
export default class SanFrancisco extends React.Component {
    render() {
        return <div className="eight wide column">      
            <h1>San Francisco</h1>
        </div>
    }
}