import React from 'react'
import { connect } from 'react-redux'

import { fetchFlights } from '../actions/flights'

import Loading from './Loading'

const mapStateToProps = (state) => ({
    flights: {...state.flights}
})

const mapDispatchToProps = {
    fetchFlights: fetchFlights
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Flights extends React.Component {

    componentWillMount() {
        this.props.fetchFlights()
    }

    render() {
        return <div className="ui segment">
            {(() => {
                if (!this.props.flights.isFetching &&
                    !this.props.flights.error) {
                    return <p>
                        Depart: {this.props.flights.departureDate} <br />
                        Return: {this.props.flights.returnDate} <br />
                        Price: {this.props.flights.price} <br />
                    </p>
                } else {
                    return <Loading />
                }
            })()}


        </div>
    }

}