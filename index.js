import React from 'react'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'

import App from './components/app'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/about' component={Contact}/>
            <Route path='/resume' component={Resume}/>
        </Route>
    </Router>
), document.getElementById('main'))




