import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import CoreLayout from './components/CoreLayoutComponent.jsx';
import InitialPrompt from './containers/InitialPromptContainer.js';
import ProductsPane from './containers/ProductsPaneContainer.js';
import Toolbar from './containers/ToolbarContainer.js';
import StoreMaster from './containers/StoreMasterContainer.js';
import Chat from './containers/ChatContainer.js';
import AddProduct from './containers/forms/AddProductFormContainer.js';
// import ComponentOrContainer from './containers/Name';

//testing imports
import Testing from './components/Testing.jsx';
import Sample from './components/Sample.jsx'
import TestBasket from './components/TestBasket.jsx'

export default (
  // main app routes
  <Route component={CoreLayout}>
    <Route path="/" component={InitialPrompt} >
    </Route>
    <Route path="/chat" component={Chat}/>
    <Route component={Toolbar} >
    <Route path="/store" component={StoreMaster}/>
    </Route>

    {/* for testing and debugging*/}
    <Route path="/testing" component={Testing}>
      {/*component available at /testing/sample*/}
      <Route path="/testing/sample" component={Sample} />
      <Route path="/testing/basket" component={TestBasket} />
      <Route path="/testing/addProduct" component={AddProduct} />
    </Route>
  </Route>

);
