import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    const onlineStatus=useOnlineStatus();
    // console.log("Header Render");

    //if no dependency array=>useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency array is [btnName]=> useEffect is called every time btnName is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnName])
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                <li>
                    Online status:{onlineStatus?'✔':'♦'}
                </li>
                    <li>
                   <Link to="/">Home</Link> 
                    </li>
                    <li>
                   <Link to="/about">About Us</Link> 
                    </li>
                    <li>
                   <Link to="/contact"> Contact Us</Link>
                   </li>
                   <li>
                   <Link to="/grocery"> Grocery</Link>
                   </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==="Login"
                        ? setBtnName("Logout")
                        : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;