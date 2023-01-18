import React from 'react';
import './index.css';
import { Outlet,Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';
import Logo from './Logo';
import { Navbar } from 'react-bootstrap';
function Navo(){
    return(
        <>
        <ul className='ul'>
            
            <Link className='li' to="/"><HomeIcon/><span className='navo_li'>Home</span></Link>
            <li className='li'><Logo src="amanjot.jpeg"/><span style={{fontWeight:"bold"}}>Amanjot Singh</span> </li>
            <div style={{marginBottom:"10%",marginTop:"5%"}}> <Link className='li' to="Login"><LoginIcon/><span className='navo_li'>Login</span></Link></div>
           <div><Link className='li' to="Contact" style={{marginBottom:"10%"}}><HelpIcon/>
            <span className='navo_li'>Help Desk</span></Link></div>
            
            <Outlet/>
            <div style={{fontWeight:"bold",fontSize:"large",marginTop:"40px"}}><GroupsIcon/> Groups :</div>
            <li className='lii'>Haryana car sale and purchaes</li>
            <li className='lii'>Jokes forever</li>
            <li className='lii'>Ambala news</li> 
        </ul>
        </>
    )
}
export default Navo;