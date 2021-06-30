import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

import { useState } from 'react';

const LoginBlock = (props) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }
    console.log('render1')

    return (

        <div className={s.loginBlock} >
            {props.isAuth ?
                editMode ?
                    <button onMouseOut={deactivateEditMode} onClick={props.logout}  >Log out</button>
                    : <div onMouseMove={activateEditMode}  > {props.login} </div>
                : <NavLink to={'/Login'}>Login</NavLink>}
        </div>

    );
}
export default LoginBlock;