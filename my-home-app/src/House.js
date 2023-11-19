import React, { useRef } from 'react'
import './House.css'
import {useState } from 'react'



const House = ({house}) => {
  let [userdata , setUserdata] = useState({
    name: '',
    email: '',
    remark: ''
  })

  const [Showform , setShowform] = useState(false);
  const HandleClick = () => {
    setShowform(!Showform);
    console.log('it works');
  }
  console.log(userdata);

   const Handlechange = (e) => {
    setUserdata({ ...userdata, [e.target.id]: e.target.value})
    console.log(userdata);
    // if (e.target.id === 'name') {
    //   const name = e.target.value
    //   console.log( 'name is' + name);
      
    // }
    // if (e.target.id === 'email') {
    //   const email = e.target.value
    //   console.log( 'email is' + email);
      
    // }
    // if (e.target.id === 'remark') {
    //   const remark = e.target.value
    //   console.log( 'remark is' + remark);
      
    // }


  }
  // const prevent = (e) => {
  //   e.preventDefault()

  // }
  






  return (
  <>
    <div>{house.country}</div>
    <div><h2>{house.address}</h2></div>
    <div className='images'>
      <div className='picture'>
        <img src = {`/images/${house.photo}.jpeg`}/>
      </div>
      <div className='description'>
        <div className='price'>${house.price}</div>
        <div className='price-info'>{house.description}</div>
        <div  id='icon'> <img src = {`/images/pngegg.png`} onClick={HandleClick}/></div>
        {Showform &&           <div id='form'>
          <form>
            Name<input type='text' id='name' onChange={Handlechange} value={userdata.name} name='name'></input>
            Email Address<input type='email' id='email'   onChange={Handlechange} value={userdata.email} name='email'></input>
            Remark<input type='text' id='remark'   onChange={Handlechange} value={userdata.remark} name='remark'></input>
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
        }


      </div>
    </div>
  </>
  )
}

export default House
