import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {reducers} from './state'
export default createStore(reducers, applyMiddleware(thunk));

