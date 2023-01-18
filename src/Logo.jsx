import React from 'react';
import './index.css';
function Logo(props){
    return(
    <img className='img_aman' src={props.src} alt={props.name} />

    )
}
export default Logo;