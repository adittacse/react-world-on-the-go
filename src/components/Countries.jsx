import { use, useState } from 'react';
import Country from './Country/Country';
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In the countries</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country?.cca3?.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                    countries.map(country => <Country 
                        key={country?.cca3?.cca3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries} />)
                }
            </div>
        </div>
    );
};

export default Countries;