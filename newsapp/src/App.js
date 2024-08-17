// API key: d5423cd8fef34c6b88f5714d133c76ca
// Email: yefawe1333@chaladas.com
import Navbar from './Components/Navbar'
import News from './Components/News'
import NewsItem from './Components/NewsItem'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}
