import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);
    const { name, flags, population, area } = country;
    
    const handleVisited = () => {
        if (visited) {
            setVisited(false);
        } else {
            setVisited(true);
            handleVisitedCountries(country);
        }
    }
    
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={flags?.flags?.png} alt={flags?.flags?.alt ? flags.flags.alt : `${name?.common} flag`} />
            <h3>Name: {name?.common}</h3>
            <p>Population: {population?.population}</p>
            <p>Area: {area.area} {area.area > 3000000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                { visited ? "Visited" : "Not Visited" }
            </button>
        </div>
    );
};

export default Country;