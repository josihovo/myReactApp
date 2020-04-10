import { 
    FETCH_COMMENTS_BEGIN,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    CLEAR_COMMENTS    
  } from '../actions/commentActions'

  const initialState = {
      items :[],
      loading: false,
      error: null
  };


  const commentReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_COMMENTS_BEGIN:
            return {
              ...state,
              loading:true,
              error:null  
            };

        case  FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.registros
            };

        case  FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload.error,
                items:[]
            };

        case CLEAR_COMMENTS:
            return {
                ...state,
                items:[]
            };
        default:
             return state;
    }

  }

  export default commentReducer;