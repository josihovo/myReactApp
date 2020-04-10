export const FETCH_ALBUMS_BEGIN  = 'FETCH_ALBUMS_BEGIN';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';
export const CLEAR_ALBUMS = 'CLEAR_ALBUMS';


export const fetchAlbumsBegin = () => ({
    type: FETCH_ALBUMS_BEGIN
});


export const fetchAlbumsSuccess = registros => ({
    type: FETCH_ALBUMS_SUCCESS,
    payload: { registros }
});


export const fetchAlbumsFailure = error => ({
    type: FETCH_ALBUMS_FAILURE,
    payload: { error } 
});


export const getAlbums = () => {
    return (dispatch) => {

        dispatch(fetchAlbumsBegin());

        return fetch ('https://jsonplaceholder.typicode.com/albums')
        .then (res => res.json())
        .then( json =>   dispatch(fetchAlbumsSuccess(json)  ))
        .catch( error => dispatch(fetchAlbumsFailure(error) ));
    }
};


export const getToDos = () => {
    return (dispatch) => {

        dispatch(fetchAlbumsBegin());

        return fetch ('https://jsonplaceholder.typicode.com/todos')
        .then (res => res.json())
        .then( json =>   dispatch(fetchAlbumsSuccess(json)  ))
        .catch( error => dispatch(fetchAlbumsFailure(error) ));
    }
};


 
 
export const clearAlbums = () => ({ type: CLEAR_ALBUMS }); 