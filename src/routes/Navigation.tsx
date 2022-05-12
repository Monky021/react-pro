import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import {routes} from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              {
                routes.map( ({to, name}) => (
                  <li>
                    <NavLink key={to} to={to} className={({isActive})=> isActive ? 'nav-active' : '' } > {name} </NavLink>
                  </li>
                ) )
              }
                {/* <li>
                  <NavLink to="/lazy1" className={({isActive})=> isActive ? 'nav-active' : '' } >Lazy1</NavLink>
                  </li>
                  <li>
                  <NavLink to="/lazy2" className={({isActive})=> isActive ? 'nav-active' : '' } >lazy2</NavLink>
                  </li>
                  <li>
                  <NavLink to="/lazy3" className={({isActive})=> isActive ? 'nav-active' : '' } >lazy3</NavLink>
                </li> */}
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>} />
                
                ))
              }
          {/* <Route path="/lazy2" element={<LazyPage2/>} />
          <Route path="/lazy3" element={<LazyPage3/>} /> */}
          <Route path="/*" element={<Navigate to={routes[0].to} replace /> } />

        </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
