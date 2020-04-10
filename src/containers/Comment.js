import React from 'react'
import { connect } from 'react-redux'
import { getComentarios, clearComentarios } from '../actions/commentActions'
import { Button, Icon } from 'react-materialize'
 
class Comment extends React.Component{

    componentDidMount(){
        this.props.getComentarios();
    }

    

    render(){
        const { comentarios, loading, error } = this.props;
        const {clearComentarios } = this.props;


        if (error){
            return <div>Error! {error.message} </div>
        }

        if ( loading ){
            return <div>Loading...</div>
        }



        return(
            <div>
         
                <Button node="button" waves="light" onClick = {clearComentarios} > 
                    limpiar  <Icon right>cloud</Icon>
                </Button>


                <ol>
                    { comentarios.map ( x =>
                         <li> {x.name} ({ x.email })  </li> 
                    ) }
                </ol>
            </div>
        )

    }

}


const mapSate = state => ({
    comentarios: state.comments.items,
    loading: state.comments.loading,
    error: state.comments.error
});

const mapDispatchs = { getComentarios, clearComentarios}

export default connect (mapSate, mapDispatchs)(Comment);
