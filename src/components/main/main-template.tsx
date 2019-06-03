import React from 'react';
import { NavLink } from 'react-router-dom';
import './main-template.scss';

export const MainTemplate = (props: any) =>
    <div className="main-template">
        <div className="main-template__menu" >
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link" activeClassName="active" >главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/strings`} className="nav-link" activeClassName="active">строки</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/test`} className="nav-link" activeClassName="active">тест</NavLink>
                </li>
            </ul>
        </div>
        <div className="main-template__content" >
            {props.children}
        </div>
    </div>
