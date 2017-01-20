import React from 'react'
import { connect } from 'react-redux'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { fetchFlights, changeDepartureDate, changeReturnDate } from '../actions/flights'

import Loading from './Loading'

const mapStateToProps = (state) => ({
    flights: {...state.flights}
})

const mapDispatchToProps = {
    changeDepartureDate: changeDepartureDate,
    changeReturnDate: changeReturnDate,
    fetchFlights: fetchFlights
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Flights extends React.Component {

    constructor(props) {
        super(props)
        
        this.changeDepart = ::this.changeDepart
        this.changeReturn = ::this.changeReturn
        this.retrieveFlights = ::this.retrieveFlights
    }

    changeDepart(date) {
        this.props.changeDepartureDate(date)
        this.retrieveFlights()
    }

    changeReturn(date) {
        this.props.changeReturnDate(date)
        this.retrieveFlights()
    }

    retrieveFlights() {
        if (this.props.flights.departureDate &&
            this.props.flights.returnDate){
            this.props.fetchFlights()
        }
    }

    render() {
        return <div className="ui segment">
            <DatePicker dateFormat="DD/MM/YYYY" selected={this.props.flights.departureDate} onChange={this.changeDepart} />
            <DatePicker dateFormat="DD/MM/YYYY" selected={this.props.flights.returnDate} onChange={this.changeReturn} />
            {(() => {
                if (!this.props.flights.isFetching &&
                    !this.props.flights.error) {
                    return <p>
                        Depart: {this.props.flights.departureDate && this.props.flights.departureDate.format('DD/MM/YYYY')} <br />
                        Return: {this.props.flights.returnDate && this.props.flights.returnDate.format('DD/MM/YYYY')} <br />
                        Price: {this.props.flights.price} <br />
                    </p>
                } else {
                    return <Loading />
                }
            })()}


        </div>
    }

}