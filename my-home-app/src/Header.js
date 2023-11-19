import React from 'react'
import myImage from './images/GloboLogo.png';
import './Header.css'
import { useNavigate } from 'react-router-dom';



const Header = ({allhouses}) => {
    const Navigate = useNavigate()
    let Countries =  [];
    if (allhouses) {
    Countries = Array.from(new Set(allhouses.map(house => {
        return house.country
    })));
    }
    const Handlechange = (e) =>{
        Navigate(`/Result/${e.target.value}`)
    }
    Countries.unshift(null)

  return (<>
      <div className='container'>
        <div className='logo'>
            <img src={myImage}alt='logo'/>
        </div>
        <div className='Header-words'>
            <h1>Providing Houses All Over The World</h1>
        </div>
    </div>
    <div className='Header-Buttom'>
        <div className='search-input'>
        <h1>Look For Your Dream Home In Your Country</h1>
        <select onChange={Handlechange}>
            {Countries.map((country)=> <option key={country} value={country} >{country}</option>)}
        </select>
        </div>
        


    </div>
  </>
  )
}

export default Header;