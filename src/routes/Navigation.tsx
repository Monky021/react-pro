import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/home" className={({isActive})=> isActive ? 'nav-active' : '' } >ShoppingPage</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active' : '' } >About</NavLink>
            </li>
            <li>
              <NavLink to="/user" className={({isActive})=> isActive ? 'nav-active' : '' } >User</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="about" element={<h1>about</h1>} />
        <Route path="user" element={<h1>user</h1>} />
        <Route path="home" element={<ShoppingPage />} />
        <Route path="/*" element={<Navigate to='home' replace /> } />

      </Routes>
      </div>
    </BrowserRouter>
  );
};
