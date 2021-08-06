import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../actions/auth';

export const NavBar = () => {
    const {name} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(startLogOut());
    }
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
            <button className="btn btn-outline-danger" onClick={handleLogOut}>
                <i className="fas fa-sign-out-alt p-1"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}
