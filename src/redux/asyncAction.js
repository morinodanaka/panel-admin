import FETCH_REQUEST from "./asyncConst"


export function asyncActionRequest(){
    return{
        type: FETCH_REQUEST,
    }
}

export function asyncActionSuccess(){
    return{
        type:FETCH_SUCCESS,
        payload:users
    }
}


export function asyncActionError(){
    return{
        type:FETCH_ERROR,
        payload:error
    }
}