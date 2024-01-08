import React from 'react';
import House from './House'
import { useParams } from 'react-router-dom';

const FilteredHouse = ({ allhouses }) => {
    const { houseId } = useParams();


    if (allhouses.length === 0) {
        return <div>No houses available</div>;
    }

    const filteredHouse = allhouses.find((house) => house.id === parseInt(houseId));

    console.log(houseId);
    return (
        <>
                <House house={filteredHouse} />    
        </>
        
        

    );
};

export default FilteredHouse;
