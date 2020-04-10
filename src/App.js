import React from 'react';
import { NavItem, Navbar, Icon} from 'react-materialize'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Dash from './components/dash'
import Album from './containers/Album'
import Comment from './containers/Comment'
import Almacen from './containers/Almacen'

function App() {
  return (
    <Router>
    <React.Fragment>
  
        <Navbar alignLinks="right"   
                brand={<a className="brand-logo" href="#">Logo</a>}   
                menuIcon={<Icon>menu</Icon>}
                options={{ draggable: true,    edge: 'left',    inDuration: 250,    onCloseEnd: null,    onCloseStart: null,    onOpenEnd: null,    onOpenStart: null,    outDuration: 200,    preventScrolling: true  }}
                className="teal darken-4"
        >
            <NavItem href="/">Home</NavItem>
            <NavItem href="/albums">Albums</NavItem>
            <NavItem href="/comments">Comentarios</NavItem>
            <NavItem href="/almacenes">Almacenes</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/dashboard">Dashboadr</NavItem>
        </Navbar>

        <section className="body">                    
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dashboard">
                    <Dash />
                </Route>

                <Route path="/albums">
                    <Album />
                </Route>

                <Route path="/almacenes">
                    <Almacen />
                </Route>


                <Route path="/comments">
                    <Comment />
                </Route>
            </Switch>
        </section>
        
        
    </React.Fragment>
    </Router>
  );
}

export default App;
 