import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'

import { fetchNews } from '../actions/news'

const mapStateToProps = (state) => ({
    news: {...state.news}
})

const mapDispatchToProps = {
    fetchNews: fetchNews
}

@connect(mapStateToProps, mapDispatchToProps)
export default class News extends React.Component {

    componentWillMount() {
        this.props.fetchNews(this.props.source)
    }

    render() {
        return <Loading />
    }
}