import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (val) => {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    const updatedNew = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
        updatedNew();
        // eslint-disable-next-line
    }, [])

    const fetchNextUsers = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    return (
        <>
            <h2 className="text-center" style={{ marginTop: "85px" }}>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {(loading) && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchNextUsers}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}>

                <div className="container my-3">

                    <div className="row" >
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url} >
                                    <NewsItem source={element.source.name} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://qtxasset.com/quartz/qcloud5/media/image/GettyImages-1164894321.jpg?VersionId=5R3vvrsshAXhNuIhCTfy2vVs31g4eTSj"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} mode={props.mode}/>
                                </div>);
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )

}
News.defaultProps = {
    country: 'us',
    pageSize: 21,
    category: 'business'

};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};

export default News;