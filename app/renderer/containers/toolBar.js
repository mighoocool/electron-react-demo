import React, { Component } from 'react';
import {connect} from 'react-redux';
import remote,{ipcRenderer} from 'electron'

const mapStateToProps = (state, ownProps) => {
    return {
        stores: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch({type:'INCREMENT_COUNTER'})
        }
    }
}
class Toolbar extends Component {
    constructor(arg){
        super(arg)
    }
    hideWindow=()=>{
        console.log('4444444')
        ipcRenderer.send('hide-window')
    }
    render(){
        return(
            <div style={{background:'red'}}>
                <button onClick={(this.hideWindow)}>close</button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)