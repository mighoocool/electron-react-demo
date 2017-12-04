import React, { Component } from 'react'
import ReactDOM,{render} from 'react-dom';

class App extends Component {
    constructor(arg){
        super(arg)
    }
    render(){
        return(
            <h1>This is React Dom</h1>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
)