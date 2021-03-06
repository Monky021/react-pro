import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=> isActive ? 'nav-active' : '' } >Home</NavLink>
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
        <Route path="home" element={<h1>home</h1>} />
        <Route path="/*" element={<Navigate to='home' replace /> } />

      </Routes>
      </div>
    </BrowserRouter>
  );
};
