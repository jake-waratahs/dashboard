import fetch from 'isomorphic-fetch'

export const UPDATE_FOREX_REQUEST = 'UPDATE_FOREX_REQUEST'
export const UPDATE_FOREX_SUCCESS = 'UPDATE_FOREX_SUCCESS'
export const UPDATE_FOREX_FAILURE = 'UPDATE_FOREX_FAILURE'

function updateForexRequest(base, curr){
    return {
        type: UPDATE_FOREX_REQUEST,
        base: base,
        curr: curr
    }
}

function updateForexSuccess(rate){
    return {
        type: UPDATE_FOREX_SUCCESS,
        rate: rate
    }
}

function updateForexFailure(){
    return {type: UPDATE_FOREX_FAILURE}
}

export const fetchForex = (base, curr) => {
    return (dispatch) => {
        dispatch(updateForexRequest(base, curr))
        return fetch(`http://api.fixer.io/latest?symbols=${curr}&base=${base}`)
        .then(response => response.json())
        .then(res => {
            return dispatch(updateForexSuccess(res.rates[curr]))
        }, () => dispatch(updateForexFailure()))
    }
}