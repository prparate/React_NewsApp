import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewsLocal from './components/NewsLocal';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 3
  apiKey = process.env.REACT_APP_NEWS_AP_KEY

  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({
      progress :progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsLocal key='home' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path="/general" element={<NewsLocal key='general' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path="/business" element={<NewsLocal key='business' pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route exact path="/entertainment" element={<NewsLocal key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route exact path="/health" element={<NewsLocal key='health' pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route exact path="/science" element={<NewsLocal key='science' pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route exact path="/sports" element={<NewsLocal key='sports' pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route exact path="/technology" element={<NewsLocal key='technology' pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
          {/* <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='home' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes> */}
        </Router>
      </div>
    )
  }
}
