
const getParam = data =>{
    return Object.keys(data).map((key)=>{
        return `${key}=${data[key]}`
    }).join('&')
}
const postFetch = (url, postData) => {
    return fetch(url, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: getParam(Object.assign(postData,{
                '_ref': 'pcclient',
            }))
        })
        .then((res) => res.json())
    }

export const setUserInfo = userInfo => ({type: 'GET_USERINFO', userInfo: userInfo})

export const login = (postData) => dispatch => {
    postFetch(`${ctx}/sso/login`, postData)
    .then(json=>{
        if(json.code === '200'){
            dispatch(setUserInfo(json))
        }else {
            alert(json.message)
        }
    })
}

export const getWorkList = list =>({
    type:'GET_WORKLIST',
    list:list
})