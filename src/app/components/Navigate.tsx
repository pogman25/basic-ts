import React from 'react'
import { NavLink } from 'react-router-dom';

const componentName = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" >Пользователи</NavLink></li>
                <li><NavLink to="/projects" >Проекты</NavLink></li>
                <li><NavLink to="/stack" >Стек</NavLink></li>
                <li><NavLink to="/mentors" >Наставники</NavLink></li>
            </ul>
        </nav>
    )
}

export default componentName