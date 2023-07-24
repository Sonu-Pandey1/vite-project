// import action from "../actions/Action"
// import {INCREMENT,DECREMENT} from "../Constance"

let initialalValue = 0
const changeTheNumber=(state = initialalValue,action)=>{
    switch(action.type){
        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        default: return state
    }


}
export default changeTheNumber;