import React, { useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstletter = (string) => {
    return string. charAt (0) . toUpperCase () + string.slice (1) ;
  }
     const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=bcab42f3617541539e37eabedb846d58&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(50);
        setLoading(true);
        let data = await fetch(url);
        let parsdata = await data.json();
        setArticles(parsdata.articles);
        setTotalResults(parsdata.totalResults);
        setLoading(false);
        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `${capitalizeFirstletter(props.category)} - Dinosouce`;
       updateNews();
    
    }, [])
    
  // const componentDidMount = async ()=>{
  //  this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=bcab42f3617541539e37eabedb846d58&pageSize=${props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsdata = await data.json();
        // this.setState({
        //     articles: parsdata.articles,
        //     totalResults: parsdata.totalResults,
        //     loading:false,
        // });
   // }
const handlePrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=bcab42f3617541539e37eabedb846d58&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsdata = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsdata.articles,
    //         loading:false,
    //     });
    setPage(page-1);
      //  this.setState({page: this.state.page - 1});
    updateNews();
}
const handleNextClick = async ()=>{
    // if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

    // }else{

    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=bcab42f3617541539e37eabedb846d58&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsdata = await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsdata.articles,
    //         loading:false,
    //     });
    // }
    //this.setState({page: this.state.page + 1});
    setPage(page+1);
    updateNews();
}
const fetchMoreData = async ()=>{
   // this.setState({page: this.state.page + 1});
    setPage(page+1);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=bcab42f3617541539e37eabedb846d58&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsdata = await data.json();
        setArticles(articles.concat(parsdata.articles))
        setTotalResults(parsdata.totalResults)
        // this.setState({
        //     articles: this.state.articles.concat(parsdata.articles),
        //     totalResults: parsdata.totalResults,
        // });

}

    return (
      <div className="main_news_comp">
        <div className="container">
           <h2>Top News</h2>
           {/* loader */}
           {/* {this.state.loading &&  <Spinner />} */}
           <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
            <div className="news_row">
                {/* loop */}
               
                    {articles.map((element,index)=>{
                    return <Newsitem key={index} url={element.url} date={element.publishedAt} title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage}/>
                    })}
                
                {/* endloop */}
            </div>
            </InfiniteScroll>
            <button disabled={page <= 1 } className="btn" onClick={handlePrevClick}>Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)}  className="btn" onClick={handleNextClick}>Next</button>
        </div>
      </div>
    )
}

News.defaultProps = {
    pageSize: 6,
    category: 'general',
  }
  News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
} 
export default News