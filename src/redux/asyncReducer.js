const asyncInitialState={
    loading:false,
    users:[],
    error:''
}

function asyncReducer(state=asyncInitialState , action){
    switch(action.type){
        case FETCH_REQUEST:
        return{
            ...state, loading:true
        }

        case FETCH_REQUEST:
            return{
                loading:false,
                users:action.payload,
                error:''
            }

        case FETCH_REQUEST:
            return{
                loading:false,
                users:[],
                error:action.payload
            }

    }
}