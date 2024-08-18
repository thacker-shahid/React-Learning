import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'

export default class News extends Component {
    
    constructor(){
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: null
        }
    }
    
    async componentDidMount(){ 
        let apiUrl = `https://newsapi.org/v2/top-headlines?page=${this.state.page}&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=d5423cd8fef34c6b88f5714d133c76ca`
        // let apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&page=${this.state.page}&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=d5423cd8fef34c6b88f5714d133c76ca`
        let data = await fetch(apiUrl)
        this.setState({loading: true})
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    
    prevFunc = async ()=>{
            let apiUrl = `https://newsapi.org/v2/top-headlines?page=${this.state.page-1}&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=d5423cd8fef34c6b88f5714d133c76ca`
            // let apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&page=${this.state.page}&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=d5423cd8fef34c6b88f5714d133c76ca`
            let data = await fetch(apiUrl)
            this.setState({loading: true})
            let parseData = await data.json();
            this.setState({
                page: this.state.page - 1,
                articles: parseData.articles,
                loading: false
            })
        }
    
        nextFunc = async ()=>{
            let apiUrl = `https://newsapi.org/v2/top-headlines?page=${this.state.page+1}&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=d5423cd8fef34c6b88f5714d133c76ca`
            // let apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&page=${this.state.page}&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=d5423cd8fef34c6b88f5714d133c76ca`
            let data = await fetch(apiUrl)
            this.setState({loading: true})
            let parseData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false   
            })
        }
    
    render() {
        
        let count = 0;

    return (

        <div className="container">
            {/* <h1>News Cards</h1> */}
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} onClick={this.prevFunc} type="button" className="btn btn-dark">Previous</button>
                <button disabled={this.state.page>=this.state.totalResults/10} onClick={this.nextFunc} type="button" className="btn btn-dark">Next</button>
            </div>
            {this.state.loading && <Loading />}
            <div className="row">
                {
                    !(this.state.loading) && this.state.articles.map((elem)=>{
                        count++;
                        return <div className="col-md-4 my-2" key={elem.url}>
                        <NewsItem count={count} title={(elem.title)?elem.title.slice(0, 20): ""} description={(elem.description)?elem.description.slice(0, 30):""} publishedAt={elem.publishedAt} url={elem.url} urlToImage={elem.urlToImage}/>
                    </div>
                    })
                }
            </div>
            
        </div>
    )
  }
}