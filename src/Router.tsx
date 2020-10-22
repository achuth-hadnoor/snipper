import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
    Home,
    Snip,
    Settings,
    New
} from './pages'
import { connect } from 'react-redux'

interface HomePageProps{

}

interface HomePageState{}

class RouterView extends React.Component<HomePageProps,HomePageState>{
    componentDidMount(){
        console.log(this.props);
        
    }
    render(){
        return(
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
} 
const mapStateToProps = ()=>({ 
})
const MapStateToState = ()=>({ 
})
export default connect(mapStateToProps,MapStateToState)(RouterView)