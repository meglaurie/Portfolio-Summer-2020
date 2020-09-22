import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectListPage from './pages/ProjectListPage';
import DesignProjectListPage from './pages/DesignProjectListPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.scss';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import BackDrop from './components/SideMenu/BackDrop';
import {
  TransitionGroup,
  CSSTransition, } from 'react-transition-group';


class App extends Component {
  state = {
    sideMenuOpen: false,
  }

  sideMenuToggleClickHandler = () => {
    this.setState(prevSate => {
      return { sideMenuOpen: !prevSate.sideMenuOpen}
    })
  }
  backDropClickHandler = () => {
    this.setState({sideMenuOpen: false})
  }

render(){
  let backdrop = null;


  if (this.state.sideMenuOpen){
    backdrop = <BackDrop click={this.backDropClickHandler}/>

  }

  return (
  <Router>
      <div className="App">
      <NavBar menuClickHandler = {this.sideMenuToggleClickHandler}/>
      <SideMenu show={this.state.sideMenuOpen}/>
      {backdrop}
      <Route render ={({location}) => (
        <TransitionGroup>
          <CSSTransition
              key ={location.key}
              timeout={500}
              classNames="fade"
           >
            <div id="page-body">
                <Switch location={location}>
                  <Route path="/"component ={HomePage} exact/>
                  <Route path="/about" component ={AboutPage}/>
                  <Route path="/archive" component ={ArchivePage}/>
                  <Route path="/projects/:name" component ={ProjectsPage}/>
                  <Route path="/project-list" component={ProjectListPage} />
                  <Route path="/design-project-list" component={DesignProjectListPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>

      )}/>



      </div>
  </Router>
  );
  }
}

export default App;
