import React from 'react'
import { NavLink } from 'react-router-dom';

const componentName = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" >Главная</NavLink></li>
                <li><NavLink to="/works" >Работы</NavLink></li>
                <li><NavLink to="/contacts" >Работы</NavLink></li>
                <li><NavLink to="/catalog" >Работы</NavLink></li>
            </ul>
        </nav>
    )
}

componentName.propTypes = {

}

export default componentName