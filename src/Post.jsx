import React from 'react';
import './index.css'
import Logo from './Logo';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import IosShareIcon from '@mui/icons-material/IosShare';
function Post(props){
    return(
<div className='cards'>
  <div className='cards_top'>
    <span className='logo_set'><Logo src={props.src1} name={props.name1}/></span>
    <span className='post_name'>{props.name2}</span>
    <h4 style={{fontFamily: 'Josefin Sans'}}>{props.line}</h4>
  </div>
  <div className='cards_mid'>
    <img className='cards_img' src={props.src2} alt={props.name3} />
  </div>
  <div className='cards_btn'>
    <span><ThumbUpIcon/><span className=
    'icnn'>Like</span></span>
    <span><AddCommentIcon/><span className="icnn">Comment</span></span>
    <span><IosShareIcon/><span className="icnn">Share</span></span>
  </div>
</div>
    )
}
export default Post;