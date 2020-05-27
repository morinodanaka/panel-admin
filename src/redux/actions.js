import { ACTIVE, OPEN } from "./const";

export function activeAction(){
    return{
        type:ACTIVE
    }
}

export function openAction(){
    return{
        type:OPEN
    }
}
