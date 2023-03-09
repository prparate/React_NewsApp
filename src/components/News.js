import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {        
        super(props)
        console.log(this.props.category)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    capitalizeFirstLetter(cat) {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }

    async componentDidMount() {

        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })

        this.props.setProgress(30)
        let data = await fetch(url)
        let parsedData = await data.json()

        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    fetchData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page + 1
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.totalResults > this.state.articles.length}
                    loader={<h1>Loading...</h1>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) =>
                                <div className='col mb-6' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : 'Click on Read more for description'} imageUrl={element.urlToImage ? element.urlToImage : 'https://media.cnn.com/api/v1/images/stellar/prod/221118103839-02-twitter-future-uncertainty-restricted.jpg?c=16x9&q=w_800,c_fill'} newsUrl={element.url} author={element.author ? element.author : 'Unknown'} publishedAt={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                                </div>
                            )}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
