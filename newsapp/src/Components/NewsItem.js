import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let { title,description,  publishedAt, urlToImage, url, count } = this.props

        return (
            <>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={urlToImage} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{publishedAt}</p>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">{count}...</p>
                        <a target='_blank' href={url} className="btn btn-primary">Read more...</a>
                    </div>
                </div>
            </>
        )
    }
}