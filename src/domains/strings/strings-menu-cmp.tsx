import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

export const StringsMenu = (props: any) =>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink exact to="/strings" className="nav-link">Список строк</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Изменить
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink exact to="/strings/new" className="dropdown-item">Создать строку</NavLink>
                        <NavLink exact to="/strings/100500" className="dropdown-item">Редактировать</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

export const StringsMenuCmp = withRouter(StringsMenu);
