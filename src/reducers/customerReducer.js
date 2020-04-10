import { 
    FETCH_CUSTOMERS_BEGIN, 
    FECTH_CUSTOMERS_SUCCESS,
    FETCH_CUSTOMERS_FAILURE
  } from '../actions/customerActions'

  const initialState= {
     items:[],
     loading:false,
     error:null 
  }


  const customerReducer = (state = initialState, action) => {
    switch (action.type){
       case FETCH_CUSTOMERS_BEGIN:
           return {
               ...state, 
               loading: true,
               error: null
            };

        case FECTH_CUSTOMERS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                items: action.payload.registros
            };
        case FETCH_CUSTOMERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
  }


  export default customerReducer;  