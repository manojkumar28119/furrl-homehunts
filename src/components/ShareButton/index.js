import React, { useState } from 'react';
import { IoShareOutline } from "react-icons/io5";
import SharePopup from '../SharePopup';
import "./index.css"

const ShareButton = (props) => {
  const {url,name} = props
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsPopupOpen(true);
   };
 
  const closePopup = (e) => {
    setIsPopupOpen(false);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div>
      <button onClick={openPopup}   className={`shareBtn ${name !== undefined && name}`}>
        <IoShareOutline size={20} className='share-icon'/>
      </button>
      {isPopupOpen && <SharePopup url={url} onClose={closePopup} />}
    </div>
  );
};

 

export default ShareButton;
