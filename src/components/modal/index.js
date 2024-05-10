import React from 'react';
import closeBtn from './../../assets/x-button.png';
import './styles.css';

const Modal = ({item ,handleClose}) => {

  return (
    <div className='modal' >
      <div  className='modal-card' >
        <div className='closeDiv'>
            <img src={closeBtn} alt='close' onClick={handleClose}/>
        </div>
        <img src={item.thumbnail.large} alt='modalImg' className='modalImg'/>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <div className='authorInfo'>
            <img src={item.author.avatar} alt='profileImg'/>
            <p>{item.author.name} - {item.author.role}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
