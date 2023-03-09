import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (cat) => {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }

    const getNewsOnLoad = async () => {
        
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)

        props.setProgress(30)
        let data = await fetch(url)
        let parsedData = await data.json()

        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)
    }


    useEffect( () => {
        document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`
        getNewsOnLoad()
        // eslint-disable-next-line
    }, [])

    const fetchData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setPage(page + 1)
    }


    return (
        <>
            <h1 className="text-center" style={{ margin: '35px', marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {/* {loading && <Spinner/>} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData()}
                hasMore={totalResults > articles.length}
                loader={<h1>Loading...</h1>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) =>
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

News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News