import React, {Component} from 'react';
import {connect} from 'react-redux';
import remote, {ipcRenderer} from 'electron';
import Toolbar from '../components/toolBar';

const mapStateToProps = (state, ownProps) => {
    return {stores: state}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch({type: 'INCREMENT_COUNTER'})
        },
        hideWindow: () => {
            ipcRenderer.send('hide-window')
        },
        push:(link)=>{
            ownProps.push(link)
        }
    }
}
// class ToolbarWrap extends Component {
//   render() {
//       console.log(this.props)
//     return (
//       <Toolbar/>
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)