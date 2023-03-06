import React from 'react'
import STYLE from './apple.module.css';
const Apple = () => {
  return (
    <>
        <div className={STYLE.adminBlock}>
            <ul>
                <li>
                   <a href="dashboard">Dashboard</a>
                </li>
                <li>
                    <a href="component">Components</a>
                </li>
                <li>
                    <a href="forms">Forms</a>
                </li>
                <li>
                    <a href="table">Table</a>
                </li>
                <li>
                    <a href="charts">Charts</a>
                </li>
                <li>
                    <a href="icons">Icons</a>
                </li>
            </ul>
            <button>Login</button>
        </div>
    </>
  )
}

export default Apple;