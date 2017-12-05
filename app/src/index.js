import React, { Component } from 'react'
import ReactDOM,{render} from 'react-dom';
import {DatePicker} from 'antd';
class App extends Component {
    constructor(arg){
        super(arg)
    }
    render(){
        return(
            <div>
                <h1>This is React Dom  111</h1>
                <DatePicker></DatePicker>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
)