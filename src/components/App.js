import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import Lessons from './Lessons'
import Dict from './Dict'
import PageNotFound from './404'

import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <div className="App" id="mina">
                <nav className="App-nav" id="nav">
                    <ul>
                        <li>
                            <Link to='lessons'>Lessons</Link>
                        </li>
                        <li>
                            <Link to='dict'>Dict</Link>
                        </li>
                    </ul>
                </nav>
                <div className="App-body">
                    <Switch>
                        <Route exact path='/' component={Lessons} />
                        <Route exact path='/lessons' component={Lessons} />
                        <Route exact path='/dict' component={Dict} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
}
