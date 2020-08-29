import React, { useEffect, useState } from 'react';
import {fetchCountry} from '../api';




const CountryPicker = ({handleCountryChange})=>{
    const [countries, setCountries] = useState([]);
useEffect(()=>{
    const fetchedCountries = async ()=>{
        setCountries(await fetchCountry());
    }

    fetchedCountries();

},setCountries);


    return(
        <div class="countrypicker">
        <strong className="mr-3">Select the country: </strong>
            <select defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="">global</option>
                {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </select>
        </div>
        );
}

export default CountryPicker;