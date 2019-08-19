import React, {Component} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './components/templates/Header'
import Footer from './components/templates/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Header/>
                    <div id="body">
                        <Route exact path='/' component={Home}/>
                        <Route path='/posts/:post_id' component={Post}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
