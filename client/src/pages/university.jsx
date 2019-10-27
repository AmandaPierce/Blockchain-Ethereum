import React, { Component } from "react";
import Navbar from '../components/navbar';
import Card from '../components/card';
import StudentPage from "../pages/student";

class UniversityPage extends Component {

    state = { userType: null, name:null };

    componentDidMount() { 
        const { drizzle, drizzleState } = this.props;
        var contract = drizzle.contracts.UniversityDegreeAuthenticator;
        //var test = contract.methods["setCurrentUniversity"].cacheSend(drizzleState.accounts[1], {from: drizzleState.accounts[1]});
        var userType = contract.methods["isRegisteredUser"].cacheCall();
        var name = contract.methods["getName"].cacheCall();
        this.setState({ userType, name });
        console.log(drizzle);
        console.log(drizzleState);
    }

    render(){
        const { UniversityDegreeAuthenticator } = this.props.drizzleState.contracts;// using the saved `dataKey`, get the variable we're interested in
        const usertype = UniversityDegreeAuthenticator.isRegisteredUser[this.state.userType];// if it exists, then we display its value
        const username = UniversityDegreeAuthenticator.getName[this.state.name];
        if(usertype && usertype.value == "university")
        {
            return(
                <div className="App">
                    <header className="App-header">
                        <Navbar />
                    </header>
                    <div className="main__body">
                        <h1 className="universityName">{username && username.value}</h1>
                        <Card />
                    </div>
                </div>
            );
        }
        else
        {
            return (
                    <div className="App">
                    <header className="App-header">
                        <Navbar />
                    </header>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">My Degrees</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Request Upload</a>
                        </div>
                    </nav>
                    <div id="nav-home"><h1>YAAAA</h1></div>
                    <div id="nav-profile">
                        <div className="main__body">
                            <h1 className="universityName">{username && username.value}</h1>
                            <div className="card studentcard">
                            <div className="card-header">
                                Request Document
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Please fill in information for the requested document</h5>
                                <form>
                                    <div className="form-group row">
                                        <label for="studentNumner" className="col-sm-2 col-form-label">Student Number</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="studentNumner" value="21217721" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="degreeName" className="col-sm-2 col-form-label">Degree Name</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="degreeName" placeholder="Bsc" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="degreeType" className="col-sm-2 col-form-label">Degree Type</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="degreeType" placeholder="Computer Science" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="degreeMajor" className="col-sm-2 col-form-label">Degree major</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" id="degreeMajor" placeholder="Informatics" />
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-primary float-right">Submit</a>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default UniversityPage;