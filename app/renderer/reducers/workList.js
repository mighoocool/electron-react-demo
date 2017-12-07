const initalState = []
const workList = (state = initalState , action) =>{
    switch(action.type){
        case 'GET_WORKLIST':
        return action.list
    }
}