import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './components/card';
import Modal from './components/modal';

const HomePage = () => {
    const [data, setData] = useState([]);
    const [modalData,setModalData]=useState()
    const [isOpen,setIsOpen ] = useState(false)
    // get data 
   async function getData(){
        const res = await axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
        console.log(res.data);
        setData(res.data);
    }
    // modal data
    function handleClick(item){
        console.log(item)
        setModalData(item)
        setIsOpen(true)
    }
    // handle close modal
    function handleClose(){
        setIsOpen(false)
    }
   useEffect(() => {
    getData();
    }, [] )

  return (
    <div className='HomePage'>
    
    {
     data.map(item => <Card item={item} handleClick={handleClick}/> )
    }
    {
      isOpen ?( <Modal item={modalData} handleClose={handleClose}/> ):''
    }
    </div>
  )

}

export default HomePage
