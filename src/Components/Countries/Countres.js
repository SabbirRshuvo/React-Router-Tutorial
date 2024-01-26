import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countres = () => {
    const [countries, setCountries] =useState([]);

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>All countries list given.. {countries.length}</h1>
            {
                countries.map(country=> <li><Link to={`/country/${country.name.common}`} >{country.name.common}</Link> </li>)
            }
        </div>
    );
};

export default Countres;