import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.less'
import remote, {ipcRenderer} from 'electron';
// const Toolbar = ({hideWindow,link}) => (
//     <div className={style.toolbar+' clearfix'}>
//         <input type="text"/>
//         <button onClick={link}>link</button>
//         <div className='pull-right'>
//             <button onClick={hideWindow}>最小化</button>
//             <button onClick={hideWindow}>关闭</button>
//         </div>
//     </div>
// )
// export default Toolbar
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

class Toolbar extends Component {
    constructor(arg){
        super(arg)
        this.state = {
            value : ''
        }
    }
render() {
console.log(this.props)
const {hideWindow} = this.props
return (
        <div>
            <input onChange={e => this.setState({value: e.target.value})} type="text"/>
            <button onClick={() => this.props.push(this.state.value)}>link</button>
            <div>{location.hash}</div>
            <div className={style.toolbar + ' clearfix'}>
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