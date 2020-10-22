import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
    Home,
    Snip,
    Settings,
    New
} from './pages'

export default function RouterView() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/new" component={New} />
                <Route path="/Snip" component={Snip} />
                <Route path="/Settings" component={Settings} />
            </Switch>
        </Router>
    )
}