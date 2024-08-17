import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    constructor(){
        super()
        this.state = {
            // articles: this.articles,
            articles: [],
            spinner: false
        }
    }
    
    async componentDidMount(){
        let apiUrl = "https://newsapi.org/v2/everything?q=apple&from=2024-08-15&to=2024-08-15&sortBy=popularity&apiKey=d5423cd8fef34c6b88f5714d133c76ca" 
        let data = await fetch(apiUrl)
        let parseData = await data.json();
        this.setState(parseData)
        // console.log(parseData.articles)
    }
    
    render() {
        let count = 0;
    return (

        <div className="container">
            {/* <h1>News Cards</h1> */}
            <div className="row">
                {
                    this.state.articles.map((elem)=>{
                        count++;
                        return <div className="col-md-4 my-2" key={elem.url}>
                        <NewsItem count={count} title={elem.title.slice(0, 20)} description={elem.description.slice(0, 30)} publishedAt={elem.publishedAt} url={elem.url} urlToImage={elem.urlToImage}/>
                    </div>
                    })
                }
            </div>
        </div>
    )
  }
}