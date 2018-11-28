import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home'
import GenerateInvoice from './Invoice/GenerateInvoice'
import AddClient from './Client/AddClientForm'
import AddProduct from './Products/AddProductForm'

const Main = () => (
    <main>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/generateInv' component={GenerateInvoice}/>
        <Route path='/addClients' component={AddClient}/>
        <Route path='/addProducts' component={AddProduct}/>
        </Switch>
    </main>    
)

export default Main;