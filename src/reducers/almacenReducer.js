import {
    FETCH_ALMACEN_BEGIN,
    FETCH_ALMACEN_SUCCESS,
    FETCH_ALMACEN_FAILURE,    
    SET_MODE
} from '../actions/almacenActions'

const initialState = {
    items:[],
    loading: false,
    error: null, 
    mode: 'R',
};

const almacenReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_ALMACEN_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ALMACEN_SUCCESS:
            return{
                ...state,
                loading: false,
                items: action.payload.registros
            };
        case FETCH_ALMACEN_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items:[]
            };
        case SET_MODE:
            return {
                ...state,
                mode: action.payload.valor
            }
        
        default:
            return state;
        
    }
};

export default almacenReducer;
