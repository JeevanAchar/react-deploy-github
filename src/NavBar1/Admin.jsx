import React from 'react'
import STYLE from './admin.module.css';
const Admin = () => {
  return (
    <>
        <div className={STYLE.adminBlock}>
            <button>Login🧑‍💻</button>
            <ul>
                <li>
                   😀 <a href="dashboard">Dashboard</a>
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
        </div>
    </>
  )
}

export default Admin