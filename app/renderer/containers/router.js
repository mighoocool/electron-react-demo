import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './login';
import MyWork from './myWork';
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state
    }
}
const publicRoute = [
    {component:Login,path:'/'},
]

const privateRoute = [
    {component:MyWork,path:'/my_work'},
]
class Router extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/my_work' component={MyWork}/>
                        {
                            publicRoute.map((route,i)=>(
                                <Route exact key={i} path={route.path} component={route.component}/>
                            ))
                        }
                        <Route exact path='/my_work' component={MyWork}/>
                        {
                            privateRoute.map((route,i)=>(
                                <Route exact key={i} path={route.path} component={route.component}/>
                            ))
                        }
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Router)