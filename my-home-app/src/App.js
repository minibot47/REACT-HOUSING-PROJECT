import './App.css';
import Header from './Header'
import FeaturedHouse from './FeaturedHouse'
import Result from './Result'
import { useEffect, useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import FilteredHouse from './FilteredHouse';


function App() {
    let [allhouses, setAllHouses] = useState([]);

    useEffect(()=>{

        fetch('/houses.json')
        .then((data) => data.json())
        .then((json) => {
            setAllHouses(json);
            console.log(allhouses);
        })
    }, [])

    return <>
    <BrowserRouter>
    <Header allhouses={allhouses}/>
    <Routes>
      <Route path='/' element={<FeaturedHouse allhouses={allhouses}/>} />
      <Route path = '/Result/:country' element={<Result allhouses={allhouses}/>}/>
      <Route path = '/FilteredHouse/:houseId' element={<FilteredHouse allhouses={allhouses}/>}/>
    </Routes>

    </BrowserRouter>
    
    </>
    
    
}



export default App ; 