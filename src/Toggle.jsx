import './App.css';
import { useState } from 'react';

function Toggle(){

    const [btnState, setBtnState] = useState(false)

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let stateCheck = btnState ? 'active' : '';

return(
    <button 
    // className="toggle fullscreen-btn"
    className={`fullscreen-btn ${stateCheck}`}
    onClick={handleClick}
    >Boopington</button>
)

}

export default Toggle;




