import { useState } from 'react';
import '../App.css';


function Modal () {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
  <>
  
  <button 
  onClick={toggleModal}
  className="about-tab">
   {toggleModal} open
  </button>

{modal && (
  <div className="about">
    <div className="text-about">
      bla bla bla
    </div>
  </div>
)}
  
  </>    
  );
}

export default Modal;