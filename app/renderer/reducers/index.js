import {combineReducers} from 'redux';
import counter from './counter';
import getUserInfo from './getUserInfo';
import workList from './workList';
const rootReducer = combineReducers({
    counter,
    getUserInfo,
    workList,
})

export default rootReducer