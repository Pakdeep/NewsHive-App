import React, { useEffect, useState } from "react";
import NewsComponents from "./NewsComponents";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeWords = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&
    category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    updateNews();
    document.title = `${capitalizeWords(props.category)}-NewsHive`;
  },[]);



  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{marginTop:"70px"}}>Top-Headlines</h1>
      <h1 className="text-center text-primary" style={{marginBottom:"20px"}}>
        {capitalizeWords(props.category)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinner className="text-center" />
          </div>
        }
      >
        <div className="container">
          <div className="row">
            {
              articles.map((article, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsComponents
                      title={article.title}
                      description={article.description}
                      author={article.author}
                      source={article.source.name}
                      date={article.publishedAt}
                      imageUrl={
                        article.urlToImage !== null
                          ? article.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtknw0E25wibaSrWcoHvQMIhrWL5Wc-JGMQ&usqp=CAU"
                      }
                      url={article.url}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      </InfiniteScroll>



    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "entertainment",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string,
};
export default News;
