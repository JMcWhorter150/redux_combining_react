import {
    connect
} from 'react-redux';

import Counter from '../components/Counter';
import { actionIncrement, actionDecrement, actionReset } from '../actions';

// Describe how to translate redux state into react props
function mapStateToProps(state) {
    return {
        // left is the name of the prop react is expecting
        // right is the redux state to pass as the prop
        count: state.count
    }
}

// Describe how to translate redux dispatch into react props

function mapDispatchToProps(dispatch) {
    return {
        // left side is react handler function
        // right side is redux store function that is called on click
        handleIncrement: () => {dispatch(actionIncrement())},
        handleDecrement: () => {dispatch(actionDecrement())},
        handleReset: () => {dispatch(actionReset())}
    };
}