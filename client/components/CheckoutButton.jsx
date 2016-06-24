import React, { Component } from 'react';

export default ({ checkout }) => (
  <div className="checkoutButton btn-warning" onClick={checkout}>
    <div>Check out</div>
  </div>
)
