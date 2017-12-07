import Login from '../components/login'
import {connect} from 'react-redux'
import {login} from '../actions/index'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (username, password, imageCode) => {
            dispatch(login(username, password, imageCode))
        },
        refershImageCode: (dom) => {
            const src=dom.getAttribute('src')
            dom.setAttribute("src", src + "?rt=" + Math.random() * 1000)
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    if(state.getUserInfo.user){
        ownProps.history.push('/my_work')
    }
    return {prop: state}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)