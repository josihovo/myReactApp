import React from 'react'
import { connect } from 'react-redux'
import { getToDos, clearAlbums, getAlbums} from '../actions/albumActions'
import { fetchCustomers } from '../actions/customerActions'

class Album extends React.Component{


    componentDidMount(){        
        
        this.props.getAlbums();
        this.props.fetchCustomers();
    }
 
    constructor(props) {        
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {

        if (this.state.isToggleOn){
            this.props.getAlbums();
        }else{
            this.props.getToDos();
        }

        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }

    render (){
        
        const { albums, lista, loading, error} = this.props;
        const { clearAlbums } = this.props;

        if ( error ){
            return <div>Error! {error.message}</div>
        }

        if ( loading ){
            return <div>Loading...</div>
        }


        return(            
            <div>
            
            
            <ol>
                {lista.map( x => 
                <li key={x.id}> {x.name}</li>
                    )}
            </ol>

            <button onClick={clearAlbums}>limpia</button>

            <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}      </button>

            <ol>
                {albums.map( x => 
                <li key={x.id}> {x.title}</li>
                    )}
            </ol>

            

            </div>
        );

    }

    



}


const mapState = state => ({
    albums: state.albums.items,
    loading: state.albums.loading,
    error: state.albums.error,
   
    lista: state.customers.items
   
});
 
 const mapDispatchs = { clearAlbums, getToDos, getAlbums, fetchCustomers }

export default connect(mapState, mapDispatchs)(Album);