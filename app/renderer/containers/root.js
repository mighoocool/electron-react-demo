import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import Router from './router'
import './body'

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer,middleware)
export default class Root extends Component {
    constructor(arg){
        super(arg)
    }
    render(){
        return(
            <Provider store={store}>
                <Router></Router>
            </Provider>
        )
    }
}