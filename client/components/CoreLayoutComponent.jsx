import React from 'react';
import NavBar from './NavBar.jsx';

export const CoreLayout = ({children}) => (
  <div>
    <NavBar/>
    {children}
  </div>
);

export default CoreLayout;
