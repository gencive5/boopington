import { useState } from 'react';
import '../App.css';


function Modal () {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
  <>
  
  <p 
  onClick={toggleModal}
  className="about-tab">
    {modal ? 'close' : 'about'}
  </p>

{modal && (
  <div className="about">
    <div className="about-text">
      I'm a photographer based in Talence.
      <br/>
      I'm open for work and collaborations.
    </div>
  </div>
)}
  
  </>    
  );
}

export default Modal;