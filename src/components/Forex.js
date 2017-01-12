import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'

import { fetchForex } from '../actions/forex'

const style = {
    color: '#fff',
    fontSize: '2em'
}

const mapStateToProps = (state) => ({
    forex: {...state.forex}
})

const mapDispatchToProps = {
    fetchForex: fetchForex
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Forex extends React.Component {


    componentWillMount() {
        this.props.fetchForex(this.props.base, this.props.currency)
        // Update forex every 24 hours
        setTimeout(() => {this.componentWillMount()}, 24 * 60 * 60 * 1000)
    }
    
    render() {
        return <div style={style}>
            {(() => {
                if (!this.props.forex.isFetching && !this.props.forex.error){
                    return <p>1 {this.props.forex.base} = {this.props.forex.rate} {this.props.forex.curr}</p>
                } else {
                    return <Loading />
                }
            })()}
        </div>
    }
}