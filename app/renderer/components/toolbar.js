import React, {Component} from 'react';
import {connect} from 'react-redux';
import remote, {ipcRenderer} from 'electron';
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
class Toolbar extends Component {
    constructor(arg) {
        super(arg)
        this.state = {
            value: ''
        }
    }
    render() {
        const {hideWindow} = this.props
        return (
            <div>
                <input onChange={e => this.setState({value: e.target.value})} type="text"/>
                <button onClick={() => this.props.push(this.state.value)}>link</button>
                <div>{location.hash}</div>
                <div className='clearfix'>
                    <div className='pull-right'>
                        <button onClick={hideWindow}>最小化</button>
                        <button onClick={hideWindow}>关闭</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)