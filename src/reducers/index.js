import { combineReducers } from 'redux'
import customers from './customerReducer'
import albums from './albumReducer'
import comments from './commentReducer'
import almacenes from './almacenReducer'

export default combineReducers ({
    customers,
    albums,
    comments,
    almacenes,
});