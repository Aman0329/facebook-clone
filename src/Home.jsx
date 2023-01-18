import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';
import Logo from './Logo';
import axios from 'axios';
import Link from './Link';                      
import Post from './Post';
import Sponsor from './Sponsor';
import Navo from './Navo';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MoodIcon from '@mui/icons-material/Mood';

import './index.css'
function Home(){
return(
  
    <>
    <Link/>
    <div className="main">
<div className="one">
<Navo/>
</div>
<div className='two'>
<div className='two_top'>
  <Logo src="amanjot.jpeg" name="aman"/>
  <input className='inp1' type="text" placeholder="What's on your mind?"/>
  <br />
  <div className='icons'>
 <span className='icn'><LiveTvIcon/><span className='icn_name'>Live Video</span></span> 
 <span className='icn'><AddAPhotoIcon/><span className='icn_name'>Photo/Video</span></span>    
  <span className='icn'><MoodIcon /><span className='icn_name'>Feeling/Activity</span></span>
  </div>
</div>
<div>
<Post src1="amanjot.jpeg" name1="Amn" name2="Amanjot singh" line="The older I get,the less i felt the need to be included,understood or accepted" src2="amanjot.jpeg" name3="aman" />
</div>
<div><Post src1="kamal.jpg" name1="kml" name2="kamal jaishi" line="Everything is fair in love" src2="kamal.jpg" name3="kmla"/></div>
<div><Post src1="amanraj.jpg" name1="amnr" name2="Amanraj" line="Focusing on my dreams" src2="amanraj.jpg" name3="amm"/></div>
<div><Post src1="gourav.jpg" name1="grv" name2="Gourav saini" line="Living happy life" src2="gourav.jpg" name3="grva"/></div>
<div><Post src1="rohan.jpg" name1="rhn" name2="Rohan Sharma" line="King of my own life" src2="rohan.jpg" name3="rhna"/></div>
<div><Post src1="mannat.JPG" name1="mnt" name2="Mannat Maan" line="End your day with positive thoughts" src2="mannat.JPG" name3="mnta"/></div>
<div><Post src1="aman.jpg" name1="nonu" name2="Anmol Singh" line="#yaar" src2="aman.jpg" name3="anml"/></div>
</div>
<div className='three'>
<h3 style={{fontWeight:"bold",color:"gray",marginLeft:"90px",marginTop:"10px",marginBottom:"20px"}}>Sponsored :</h3>
<div><Sponsor src="codingninja.png" title="Full stack web development course ......Coding Ninja"/></div>
<div><Sponsor src="scaler.png" title="Start building your carrier with Scaler Top courses"/></div>

<div className='three_bottom'>
  <h4 style={{marginTop:"10px",marginLeft:"20px"}}>Friend Requests :</h4>
  <ul>
    <li style={{listStyle:"none",fontWeight:"bold"}}><Logo src="./friend1.jpg"/><span>Amarendra upadhyay</span>
    <div style={{marginLeft:"80px",marginTop:"1 px"}}><span ><button style={{backgroundColor:"lightblue",fontWeight:"bold",paddingLeft:"10px"}}>confirm</button>
    <button style={{fontWeight:"bold"}}>delete</button>
    </span></div>
    </li>
    
    <li style={{listStyle:"none",fontWeight:"bold"}}><Logo src="./friend3.jpg"/><span>Ibadat Baweja</span>
    <div style={{marginLeft:"80px"}}><span ><button style={{backgroundColor:"lightblue",fontWeight:"bold",paddingLeft:"10px"}}>confirm</button>
    <button style={{fontWeight:"bold"}}>delete</button>
    </span></div>
    </li>

    <li style={{listStyle:"none",fontWeight:"bold"}}><Logo src="./friend2.jpg"/><span>Harshit</span>
    <div style={{marginLeft:"80px"}}><span ><button style={{backgroundColor:"lightblue",fontWeight:"bold",paddingLeft:"10px"}}>confirm</button>
    <button style={{fontWeight:"bold"}}>delete</button>
    </span></div>
    </li>
  </ul>
</div>
</div>

    </div>
    
    </>
  )
}
export default Home;