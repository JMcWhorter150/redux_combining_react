import { INCREMENT, DECREMENT, RESET } from "./actions";
// our ideal/default state is just a number :
// 0
// 1
// -1

// state is your 'bank balance'
// actions is your 'transaction slip'
export function count(state=0, action) {
    let newState = state;
    switch(action.type) {
        case INCREMENT:
            ++newState;
            break;
        case DECREMENT:
            --newState;
            break;
        case RESET:
            newState = 0;
            break;
        default:
            break;
    }
    return newState;
}