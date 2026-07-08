import { useState, useEffect } from "react";

const CountryList = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
    
            const response = await fetch("https://countriesnow.space/api/v0.1/countries/capital");

            const data = await response.json();
            
            setCountries(data.data);
            
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>

            
            <div>{countries.map((country) => (<p key={country.iso2}>{country.name} - {country.capital}</p>))}</div>

        </div>
    );
};

export default CountryList;