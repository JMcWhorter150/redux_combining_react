import { INCREMENT, DECREMENT, RESET } from "./actions";
// our ideal/default state is just a number :
// 0
// 1
// -1

// state is your 'bank balance'
// actions is your 'transaction slip'

const defaultState = {
    counter: 0,
    color: 'orange'
}
export function count(state=defaultState, action) {
    let newState = {...state};
    switch(action.type) {
        case INCREMENT:
            ++newState.counter;
            break;
        case DECREMENT:
            --newState.counter;
            break;
        case RESET:
            newState.counter = 0;
            break;
        default:
            break;
    }
    if (newState.counter % 10 === 0) {
        newState.color = 'orange';
    } else if (newState.counter % 2 === 0) {
        newState.color = 'red';
    } else {
        newState.color = 'green';
    }
    return newState;
}