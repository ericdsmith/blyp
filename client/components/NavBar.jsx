import React from 'react';
import blypLogo from '../assets/images/blyplogonav.png';
import settings from '../assets/images/settings.png';
import barcode from '../assets/images/barcode.png';
import cart from '../assets/images/cart.png';
import searchIcon from '../assets/images/search_icon.png';

const NavBar = () => (
  <nav className="menu">
  	<ul>
    	<li className="active">
        <a href="">
          <img src={blypLogo}/>
        </a>
      </li>
			<li>
        <form className="search">
					<input type="text" name="search" placeholder="search"/>
					<button type="searchicon"/>
				</form>
      </li>
      <li>
        <a href={""}>
          <img src={settings}/>
        </a>
      </li>
      <li>
        <a href={""}>
          <img src={barcode}/>
        </a>
      </li>
      <li>
        <a href={""}>
          <img src={cart}/>
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
