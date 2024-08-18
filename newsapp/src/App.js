// API key: d5423cd8fef34c6b88f5714d133c76ca
// Email: yefawe1333@chaladas.com
import Navbar from './Components/Navbar'
import News from './Components/News'
import React, { Component } from 'react'
import {
  Route,
  Router,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = ({
    progress: 0
  })

  setProgress = (prog) => {
    this.setState({
      progress: prog
    })
  }

  apiKey = process.env.REACT_APP_NEWS_API
  
  render() {
    console.log("API Key is: ", this.apiKey)
    return (
      <>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" pageSize={5} country="in" />} />
            <Route path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" pageSize={5} country="in" />} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize={5} country="in" />} />
            <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" pageSize={5} country="in" />} />
            <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" pageSize={5} country="in" />} />
            <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" pageSize={5} country="in" />} />
            <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" pageSize={5} country="in" />} />
            {/* <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" pageSize={5} country="in"/></Route>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" pageSize={5} country="in" /></Route>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize={5} country="in" /></Route>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" pageSize={5} country="in" /></Route>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" pageSize={5} country="in" /></Route>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" pageSize={5} country="in" /></Route>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" pageSize={5} country="in" /></Route> */}
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}