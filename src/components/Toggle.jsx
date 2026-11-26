import '../App.css';
import { useState } from 'react';
import logo from '../assets/logos/LB-orange-popsicle.svg';

function Toggle(){

    const [btnState, setBtnState] = useState(false)

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let stateCheck = btnState ? 'active' : '';

return(
    <img src={logo} alt="Logo" 
    className={`boop-btn ${stateCheck}`}
    onClick={handleClick}
    />
)

}

export default Toggle;




