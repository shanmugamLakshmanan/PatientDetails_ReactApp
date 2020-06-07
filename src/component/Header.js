import React from "react";
import {Link,withRouter} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService";

function Header() {
  const isuser=AuthenticationService.Isuerloggedin()
  return (
    
<div className="hed">
<header>
<nav className="navbar navbar-expand-sm  ">

<ul className="navbar-nav">
< a   className="nav-link"  target={"_blank"} rel="noopener noreferrer" href="http://www.stopcoronatn.in/">StopCorona</a>
{isuser && <li><Link to="/home" className="nav-link">Home</Link></li>}
{isuser && <li><Link to="/patdet" className="nav-link">PatientList</Link></li>}
</ul>

<ul className="navbar-nav navbar-collapse justify-content-end"> 
{!isuser && <li ><Link to="/welcome" className="nav-link">Login</Link></li>}
{isuser && <li ><Link to="/Logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}

</ul>



</nav>

    </header>
    </div>    

  );
}
export default withRouter(Header);