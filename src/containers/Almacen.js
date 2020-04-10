import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getAlmacenes, addAlmacen, updateAlmacen, deleteAlmacen, setMode} from '../actions/almacenActions'
import { Table , TextInput, Button, Icon} from 'react-materialize'
class Almacen extends React.Component{

    componentDidMount(){
        this.props.getAlmacenes();
    }

    constructor (props ){
        super(props);
        this.state = { 
            id:'',
            clave:'',
            nombre:'',
            area:''
        };       
    }


    handleInputChange = (event) =>  {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]:value
        });
    }


    guardar = (e) => {
        
        e.preventDefault();

        if (this.props.mode == 'Nuevo'){
            const reg = {
                clave: this.state.clave,
                nombre: this.state.nombre,
                area: this.state.area
    
            }
            this.props.addAlmacen(reg);
        }else{

            const reg = {
                id: this.state.id,
                clave: this.state.clave,
                nombre: this.state.nombre,
                area: this.state.area
    
            }
            this.props.updateAlmacen(reg);
            

        }

        

    }

    

    modoNuevo = ()  => {   
        this.setState({ mode: 'R', clave:'', nombre:'', area:'', id:'' })     
        this.props.setMode('Nuevo');     
    }

    cancelar = ()  => { 
         this.setState({ mode: 'R', clave:'', nombre:'', area:'', id:'' })     
         this.props.setMode('R');
    }

    editar = (item) => {
        this.setState({             
            id: item.id,
            clave: item.clave, 
            nombre: item.nombre, 
            area: item.area
         });     
        
         this.props.setMode('Edit');

    }

    render(){
        const { almacenes, loading, error, mode } = this.props;
        const { deleteAlmacen } = this.props;

        const modoRecorrido = mode === 'R';
        

        if ( error ){
            return <div>Error! {error.message }  </div>
        }

        if ( loading ){
            return <div>Loading...</div>
        }

        return (
            <Fragment>


            hola: {mode}

            {
                modoRecorrido 
                ? (
                    <Fragment>
                    <Table>
                        <thead>
                            <tr>
                                <th data-field="id">Id</th>
                                <th data-field="clave">Clave</th>
                                <th data-field="nombre">Nombre</th>
                                <th data-field="area">Area </th>
                                <th> </th>
                            </tr>                        
                        </thead>
                        <tbody>
                            {
                                almacenes.map ( x => 
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.clave}</td>
                                        <td>{x.nombre}</td>
                                        <td>{x.area}</td>
                                        <td> 
                                            <button onClick={() => this.editar(x)}>  editar </button>
                                            <button onClick={() => deleteAlmacen(x.id)}>  eliminar </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </Table>

                    

                    <Button node="button" waves="light" onClick = {this.modoNuevo} className="cyan darken-4"> 
                        <Icon left>add_box</Icon> Nuevo    
                    </Button>

                    

                    </Fragment>
                ) 
                : (
                    <Fragment>

                        <form>
                            <label>Clave</label>
                            <input 
                                name="clave"
                                type="text"
                                value={this.state.clave}
                                onChange ={this.handleInputChange}
                                placeholder= "Introduza la clave"
                            />
                            <br />

                            <label>Nombre</label>
                            <TextInput 
                                name="nombre"
                                type="text"
                                value={this.state.nombre}
                                onChange ={this.handleInputChange}
                                placeholder= "Introduza el nombre"
                            />
                            <br />
                            <label>Area</label>
                            <input 
                                name="area"
                                type="text"
                                value={this.state.area}
                                onChange ={this.handleInputChange}
                                placeholder= "Introduza el area en metros cuadrados"
                            />
                            <br />
                            
                

                            <Button node="button" waves="light" onClick = {this.guardar} className="light-blue darken-4"> 
                                <Icon left>check</Icon> Guardar    
                            </Button>

                            <Button node="button" waves="light" onClick = {this.cancelar} className=" light-blue darken-1"> 
                                <Icon left>close</Icon> Cancelar   
                            </Button>
                            
                        </form>
                    </Fragment>

                )
            }
            

 
 
            </Fragment>
        )
    }

    
} 

const mapState = state => ({
    almacenes: state.almacenes.items,
    loading: state.almacenes.loading,
    error: state.almacenes.error,
    mode: state.almacenes.mode
})

const mapDispatch = { getAlmacenes, addAlmacen, updateAlmacen, deleteAlmacen, setMode }

export default connect (mapState, mapDispatch)(Almacen);



///reac-forms-materialize
//https://www.npmjs.com/package/react-forms-materialize-css

//https://rosolutions.com.mx/blog/index.php/2018/07/19/consumir-api-con-react-redux/

