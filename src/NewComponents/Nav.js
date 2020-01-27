import React from 'react'
import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark">
        <a href="#" className="navbar-brand"
        style={{
            border:"3px solid light-grey",
            borderRadius:"25px",
            padding:"3px 5px",
            fontWeight:"bold"
        }}
        > Projects Demo App</a>
         <div className="collapse navbar-collapse" id="navbarColor02">
             <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                     <Link to ='/'className="nav-link">
                         Home
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link to='/Contact'className="nav-link">
                         Contact
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link to='/About' className="nav-link">
                         About
                     </Link>
                 </li>
             </ul>
                <form className="form-inline">
                    <input className="form-control"
                    type="Search"  
                    placeholder="Search" 
                    aria-lable="Search"/>
                </form>

         </div>
        </nav>
    )
}
export default Nav;