import React, { Component } from "react";
import DegreeAuthenticatorContract from "./contracts/DegreeAuthenticator.json";
//import getWeb3 from "./utils/getWeb3";
import UniversityPage from './pages/university';
import StudentPage from './pages/student';
import HomePage from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

class App extends Component {
  state = 
  { 
    loading: true,
    drizzleState: null,
    userType: "error"
    };
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount() {
    const { drizzle } = this.props;
  
    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {
  
      // every time the store updates, grab the state from drizzle
      const drizzleState2 = drizzle.store.getState();
      
      // check to see if it's ready, if so, update local component state
      if (drizzleState2.drizzleStatus.initialized) {

        this.setState({ loading: false, drizzleState:drizzleState2 });
        
      }
    });
  }

  compomentWillUnmount() {
    this.unsubscribe();
  }
  


  render() {
    if (this.state.loading) {
      return <div>Loading Drizzle...</div>;
    }
    // const usertype = UniversityDegreeAuthenticator.isRegisteredUser[this.state.userType];// if it exists, then we display its value

    return (
      <UniversityPage  drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />
      // <Router>
      //   <Switch>
      //     <Route path="/university" component={UniversityPage}/>
      //     <Route path="/student" component={StudentPage} />
      //     <Route path="/" component={HomePage} />
      //   </Switch>
      // </Router>
    );
  }
}

export default App;
