import {
    FETCH_ALBUMS_BEGIN,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE, 
    CLEAR_ALBUMS
} from '../actions/albumActions'

const initialState = {
    items: [],
    loading: false,
    error: null
};


const albumReducer = (state = initialState, action) =>{

    switch(action.type){
        case FETCH_ALBUMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.registros
            };
        
        case FETCH_ALBUMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items:[]
            };
        
        case CLEAR_ALBUMS:
            return {
                ...state,
                items:[]
            };
        default:
            return state;
    }
}


export default albumReducer;