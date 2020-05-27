import { combineReducers } from "redux"
import { ACTIVE, OPEN } from "./const"

const openInitialState = {
    open:false,
}
function openReducer(state = openInitialState , action){
    switch(action.type){
        case OPEN:
            const currentOpenState = {...state}
            currentOpenState.open = !currentOpenState.open
            return currentOpenState
        default:
            return state
    }
}

const activeInitialState = {
    active:false,
}
function activeReducer(state = activeInitialState , action){
    
    switch(action.type){
        case ACTIVE:
            const currentActiveState = {...state}
            currentActiveState.active = !currentActiveState.active
            return currentActiveState
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    open: openReducer,
    active:activeReducer
})

