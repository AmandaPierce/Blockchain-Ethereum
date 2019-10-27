import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./utils/dist/css/bootstrap.min.css";
import { Drizzle, generateStore } from "drizzle";
import UniversityDegreeAuthenticator from "./contracts/UniversityDegreeAuthenticator.json";
// import University from "./contracts/University.json";
// import Degree from "./contracts/Degree.json";
const options = { contracts: [UniversityDegreeAuthenticator] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);


ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
