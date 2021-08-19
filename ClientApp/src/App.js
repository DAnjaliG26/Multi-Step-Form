import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { SupplierForm } from './components/SupplierForm';
import { loadReCaptcha } from 'react-recaptcha-google';

export default class App extends Component {
  displayName = App.name

  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <Layout>
        <Route path="/supplierform" component={SupplierForm} />
      </Layout>
    );
  }
}
