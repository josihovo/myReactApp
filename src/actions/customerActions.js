export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FECTH_CUSTOMERS_SUCCESS = 'FECTH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';


export const fetchCustomersBegin = () => ({
    type: FETCH_CUSTOMERS_BEGIN
});
 

export const fetchCustomersSuccess = registros => ({
    type: FECTH_CUSTOMERS_SUCCESS,
    payload: { registros }
});


export const fetchCustomersFailure = error => ({
    type: FETCH_CUSTOMERS_FAILURE,
    payload: { error }
});


export const fetchCustomers = () => {

    return (dispatch) => {

        dispatch(fetchCustomersBegin());

        return fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json(),  error => console.log('un error ocurrio',error))
                                                                  .then((json) => { dispatch(fetchCustomersSuccess(json)); })
    }
};

 
  