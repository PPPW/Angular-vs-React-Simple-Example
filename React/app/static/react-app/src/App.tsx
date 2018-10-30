import * as React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Home } from './Home';
import { Data } from './Data';
import './App.css';

class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
              <div className="container-fluid">
                   <div className="row">
                      <div className="col-sm-3">
                          <div className="navbar navbar-inverse">
                              <div className="navbar-header">                                  
                                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar" />                                      
                                      <span className="icon-bar" />
                                      <span className="icon-bar" />
                                  </button>                  
                                  <Link className="navbar-brand" to="/">Menu</Link>
                              </div>
                              <div className="clearfix" />
                              <div className="navbar-collapse collapse">
                                  <ul className="nav navbar-nav">
                                      <li>
                                          <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
                                      </li>
                                      <li>
                                          <NavLink to="/data" activeClassName="active">Data</NavLink>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-9">
                          <Route path="/" exact={true} component={Home} />
                          <Route path="/Data" component={Data}/>
                      </div>
                  </div>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;
