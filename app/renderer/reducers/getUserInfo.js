const initialState = {
    user: null
}
const getUserInfo = (state = initialState, action) => {
    return action.type === 'GET_USERINFO' ? Object.assign({},action.userInfo) : Object.assign({},state)
}
export default getUserInfo