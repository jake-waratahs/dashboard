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
        // Update news every 30 mins
        setTimeout(() => {this.componentWillMount()}, 30 * 60 * 1000)
    }

    render() {
        return <div className = "ui segment">
            <h3 className="ui header">Headlines</h3>
            {(() => {
                if (!this.props.news[this.props.source] ||
                    this.props.news[this.props.source].isFetching ||
                    this.props.news[this.props.source].error) {
                        return <Loading />
                } else {
                    let headlines = this.props.news[this.props.source].headlines
                    return <div className="ui divided list">
                        {headlines.map((headline) => <div className="item">{headline}</div>)}
                    </div>
                }
            })()}
        </div>
    }
}