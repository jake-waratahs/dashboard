import fetch from 'isomorphic-fetch'
import moment from 'moment-timezone'

import { QPX_KEY } from '../config.js'

export const UPDATE_FLIGHTS_REQUEST = 'UPDATE_FLIGHTS_REQUEST'
export const UPDATE_FLIGHTS_SUCCESS = 'UPDATE_FLIGHTS_SUCCESS'
export const UPDATE_FLIGHTS_FAILURE = 'UPDATE_FLIGHTS_FAILURE'

const requestData = {
    'request': {
        'slice': [
            {
                'origin': 'SFO',
                'destination': 'SYD',
                'maxStops': 0,
                'alliance': 'ONEWORLD' 
            },
            {
                'origin': 'SYD',
                'destination': 'SFO',
                'maxStops': 0,
                'alliance': 'ONEWORLD'
            }
        ],
        'passengers': {
            'adultCount': 1,
            'infantInLapCount': 0,
            'infantInSeatCount': 0,
            'childCount': 0,
            'seniorCount': 0
        },
        'solutions': 1
    }
}

function updateFlightsRequest() {
    return {
        type: UPDATE_FLIGHTS_REQUEST
    }
}

function updateFlightsSuccess(price, departureDate, returnDate) {
    return {
        type: UPDATE_FLIGHTS_SUCCESS,
        price: price,
        departureDate: departureDate,
        returnDate: returnDate
    }
}

function updateFlightsFailure() {
    return {
        type: UPDATE_FLIGHTS_FAILURE
    }
}

export const fetchFlights = () => {
    return (dispatch) => {
        dispatch(updateFlightsRequest())
        // console.log('Fetching Flights')

        let departureDate = moment().add(1, 'month')
        requestData.request.slice[0]['date'] = departureDate.format('YYYY-MM-DD')
        // console.log(departureDate.format('YYYY-MM-DD'))

        let returnDate = departureDate.add(1, 'week')
        requestData.request.slice[1]['date'] = returnDate.format('YYYY-MM-DD')
        // console.log(returnDate.format('YYYY-MM-DD'))
        // console.log(requestData)

        return fetch(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=${QPX_KEY}`, {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(res => {
            // console.log('Response recieved')
            // console.log(res)
            let price = res.tripOption[0].saleTotal
            return dispatch(updateFlightsSuccess(departureDate, returnDate, price))
        }, () => dispatch(updateFlightsFailure()))
    }
}