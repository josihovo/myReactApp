export const FETCH_ALMACEN_BEGIN = 'FETCH_ALMACEN_BEGIN'
export const FETCH_ALMACEN_SUCCESS = 'FETCH_ALMACEN_SUCCESS'
export const FETCH_ALMACEN_FAILURE = 'FETCH_ALMACEN_FAILURE'
export const SET_MODE = 'SET_MODE'

 
//actions
const fetchAlmacenBegin = () => ({
    type: FETCH_ALMACEN_BEGIN
})


const fetchAlmacenSuccess = registros => ({
    type: FETCH_ALMACEN_SUCCESS,
    payload: { registros }
})


const fetchAlmacenFailure = error => ({
    type: FETCH_ALMACEN_FAILURE,
    payload: { error }
})


export const setMode = valor => ({
    type: SET_MODE,
    payload: { valor }
})

 


export const getAlmacenes = () => {

    return (dispatch) => {

        dispatch(fetchAlmacenBegin());        
        
        return fetch('http://localhost:1337/api/products',)
        .then (res => res.json())
        .then ( json => dispatch(fetchAlmacenSuccess(json) ))
        .catch( error => dispatch( fetchAlmacenFailure(error) ))

    }

}

export const addAlmacen = (registro) => {
    return (dispatch) => {

        const request = {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clave: registro.clave,
                nombre: registro.nombre,
                area: registro.area
            })
        };

         return fetch ('http://localhost:1337/api/products', request)
            .then( res => {                

                dispatch(setMode('R'));

                fetch('http://localhost:1337/api/products')
                    .then (res => res.json())
                    .then ( json => dispatch(fetchAlmacenSuccess(json) ))
                    .catch( error => dispatch( fetchAlmacenFailure(error) ))
                })            
            .catch( error => dispatch( fetchAlmacenFailure(error) ))



    }
}
 


export const updateAlmacen = (registro) => {
    return (dispatch) => {

        const request = {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clave: registro.clave,
                nombre: registro.nombre,
                area: registro.area
            })
        };

        return fetch ('http://localhost:1337/api/products/'+ registro.id, request)
                .then ( res => {
                    dispatch(setMode('R'));

                    fetch('http://localhost:1337/api/products')
                    .then (res => res.json())
                    .then( json => dispatch(fetchAlmacenSuccess(json) ))
                    .catch( error => dispatch(fetchAlmacenFailure(error)))
                })
                .catch( error => dispatch(fetchAlmacenFailure(error)))
            

    }    
}



export const deleteAlmacen = ( id ) => {
    return (dispatch) => {

        const request = {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

            return fetch ('http://localhost:1337/api/products/'+ id, request)
            .then ( res => {
                fetch('http://localhost:1337/api/products')
                .then( res => res.json())
                .then ( json => dispatch(fetchAlmacenSuccess(json) ))
                .catch( error => dispatch(fetchAlmacenFailure(error) ))
            })
            .catch ( error => dispatch (fetchAlmacenFailure(error) ))

    }    
}


 