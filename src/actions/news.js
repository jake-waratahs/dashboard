import fetch from 'isomorphic-fetch'

import { NEWSAPI_KEY } from '../config'

export const UPDATE_NEWS_REQUEST = 'UPDATE_NEWS_REQUEST'
export const UPDATE_NEWS_SUCCESS = 'UPDATE_NEWS_SUCCESS'
export const UPDATE_NEWS_FAILURE = 'UPDATE_NEWS_FAILURE'

function updateNewsRequest(source){
    return {
        type: UPDATE_NEWS_REQUEST,
        source: source
    }
}

function updateNewsSuccess(source, headlines){
    return {
        type: UPDATE_NEWS_SUCCESS,
        source: source,
        headlines: headlines
    }
}

function updateNewsFailure(source){
    return {
        type: UPDATE_NEWS_FAILURE,
        source: source
    }
}

export const fetchNews = (source) => {
    return (dispatch) => {
        dispatch(updateNewsRequest(source))
        return fetch(`http://newsapi.org/v1/articles?source=${source}&apikey=${NEWSAPI_KEY}`)
        .then(response => response.json())
        .then(res => {
            let headlines = res.articles.map((article) => article.title)
            return dispatch(updateNewsSuccess(source, headlines))
        }, () => dispatch(updateNewsFailure(source)))
    }
}