import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import CoreLayout from './components/CoreLayoutComponent.jsx';
import InitialPrompt from './containers/InitialPromptContainer.js';
import ProductsPane from './containers/ProductsPaneContainer.js';
import Toolbar from './containers/ToolbarContainer.js';
import StoreMaster from './containers/StoreMasterContainer.js';
import Chat from './containers/ChatContainer.js';

// import ComponentOrContainer from './containers/Name';

//testing imports
import Testing from './components/Testing.jsx';
import Sell from './components/Sell.jsx';
import Checkout from './components/Checkout.jsx'

export default (
  // main app routes
  <Route>
    <Route path="/" component={InitialPrompt} />
    <Route component={CoreLayout}>
      <Route path="/sell" component={Sell} />
      <Route path="/checkout" component={Checkout} />

      {/* for testing and debugging*/}
      <Route path="/testing" component={Testing}>
        {/*component available at /testing/sample*/}
        <Route path="/testing/sell" component={Sell} />
        <Route path="/testing/checkout" component={Checkout} />
      </Route>
    </Route>
  </Route>
);
