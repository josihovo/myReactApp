export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE'
export const CLEAR_COMMENTS  = 'CLEAR_ALBUMS'



export const fetchCommentsBegin = () => ({
    type: FETCH_COMMENTS_BEGIN
});


export const fetchCommentsSuccess = registros => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: { registros }
});


export const fetchCommentsFailure = error => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: { error }
});


export const getComentarios = () => {
    return (dispatch) => {
     
        dispatch(fetchCommentsBegin());

        return fetch ('https://jsonplaceholder.typicode.com/comments')
                .then ( res => res.json())
                .then ( json => dispatch(fetchCommentsSuccess (json)))
                .catch ( error =>  dispatch(fetchCommentsFailure (error)));

    }
};


export const clearComentarios = () => ({ type: CLEAR_COMMENTS });