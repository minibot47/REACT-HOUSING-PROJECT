import React, {useMemo } from 'react'
import './FeaturedHouse.css'
import House from './House'


const FeaturedHouse = ({allhouses}) => {
    // let featuredHouse = useMemo(() => {
    //     if (allhouses.length) {
    //       const RANDNUM = Math.floor(Math.random() * (allhouses.length - 1),[allhouses]);
    //       console.log(RANDNUM);
    //       return allhouses[RANDNUM] 
          
          
    //     }
    //     return {}
    //   },[allhouses]) 


    let featuredHouse = {}
    if (allhouses.length){
        const RANDNUM = Math.floor(Math.random() * (allhouses.length - 1),[allhouses]);
        featuredHouse = allhouses[RANDNUM]
    }
return (
    <>
    <div className='Featured-House'>
        <h2>FEATURED HOUSE</h2>  
    </div>
    <House house = {featuredHouse}/>

    </>
  )
}

export default FeaturedHouse