import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions' //get our thunk

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs(); //call on first load
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList fetchSmurfs={fetchSmurfs()} />
          <AddForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => { //map state to props
  return ({
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  })
}

export default connect(mapStateToProps, { fetchSmurfs })(App); //connect to app

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.