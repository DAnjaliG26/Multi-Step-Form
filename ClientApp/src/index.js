import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import '@progress/kendo-theme-default/dist/all.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { SupplierForm } from './components/SupplierForm';
import '../src/components/FormComponents/StyleSheet.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');


ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <div className="col-md-12">
    <div className="DivHeader col-md-12">
      <img src={require('../src/components/Images/logo.png')} alt="logo" className="brand-logo pull-left " height="65em" width="100em" />
      <h4 className="Labelstyle">SUPPLIER REQUEST FORM</h4>
      </div>
      <div className="container-fluid">
        <br /><br />
        <ul className="list-unstyled multi-steps">
          <li>Start</li>
          <li className="step1 is-active">Company Details</li>
          <li className="step2">Primaty Address</li>
          <li className="step3">Billing</li>
          <li className="step4">Insurance</ li>
          <li className="step5">Health</li>
          <li className="step6">Quality</li>
          <li className="step7">Business</li>
          <li className="step8">Political</li>
          <li className="step9">Files</li>        
          <li className="finish">Finish</li>
        </ul>
      </div>
      <SupplierForm />
      </div>
  </BrowserRouter>,
  rootElement,
);

registerServiceWorker();
