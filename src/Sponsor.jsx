import react from 'react';
import './index.css';
function Sponsor(props){
    return(
        <div className='ads'>
<img className='ads_img' src={props.src} alt="amn" />
<div className='ads_title'>Click here...
</div>
</div>

    )
}
export default Sponsor;