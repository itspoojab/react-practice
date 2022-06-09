import React from 'react';
import { Link } from 'react-router-dom';
import css from './MenuBar.module.scss'

const MenuBar = () =>{

    return(
        <div className={css.container}>
            <Link className={css.logo} to="/">
                <img src='https://www.geeksynergy.com/assets/img/logo/logo-2.png' alt="logo" />
                <span className={css.text}>GeekSynergy</span>
            </Link>
            <div className={css.menu}>
                <Link to='/info' >Company Info</Link>
            </div>

        </div>
    )

};
export default MenuBar;