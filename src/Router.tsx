import React from 'react'
import { Dispatch } from 'redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
    Home,
    Snip,
    Settings,
    New
} from './pages'
import { connect } from 'react-redux'
import { set_user, update_user, remove_user } from './Store/actions/user';
import { User } from './Store/actions/types';

interface HomePageProps {
    setUser: () => void,
    updateUser: (user:User) => void,
    removeUser: (user:User) => void 
}

interface HomePageState { 
    user:User
}

class RouterView extends React.Component<HomePageProps, HomePageState>{
    componentDidMount() { 
    }
    render() {
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
}
const mapStateToProps = (state: HomePageState) => ({
    user:state.user
})
const MapStateToState = (dispatch: Dispatch): HomePageProps => ({
    setUser: () => dispatch(set_user()),
    updateUser: (user: User) => dispatch(update_user(user)),
    removeUser: (user: User) => dispatch(remove_user(user))
})
export default connect(mapStateToProps, MapStateToState)(RouterView)