import {
    createStore
} from 'redux';
import React from 'react';
import { Provider } from 'react-redux';

import {count} from './reducers';

// Counter below is just a variable name. You could call it whatever you want
import Counter from './containers/CounterContainer';

const store = createStore(count);

export default function CounterApp() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
