import React from 'react'
import './Result.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Result = ({ allhouses }) => {
  const Navigate = useNavigate();
  const { country } = useParams();
  const filterhouses = allhouses.filter((house) => house.country === country);

  const handleClick = (houseId) => {
    console.log('clicked');
    Navigate(`/FilteredHouse/${houseId}`);
    
  };

  return (
    <>
      <div className='result'>
        <h1>Result for:</h1>
      </div>
      <table>
        <tbody>
          {filterhouses.map((houses) => (
            <tr key={houses.id} onClick={() => handleClick(houses.id)}>
              <td>{houses.address}</td>
              <td>{houses.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Result;