import React, { Component } from 'react'
import ReactDOM,{render} from 'react-dom';
import Root from './containers/root';
import './styles/public.css'
class App extends Component {
    constructor(arg){
        super(arg)
    }
    render(){
        return(
            <Root/>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
)