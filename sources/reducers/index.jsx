import { combineReducers } from 'redux';

import reducerTimer from './ReducerTimer';

const RootReducer = combineReducers({
    timer: reducerTimer
});

export default RootReducer;