import React from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";

const CountriesDetails = (props) =>{

    const {id} = useParams();

    let foundCountry = props.countries.find((country)=>{
        return country.alpha3Code === id
            
    });
    console.log(foundCountry)
    return(
       
        <div>
            <p>Country Name: {foundCountry.name.official}</p>
            <p>Capital: {foundCountry.capital}</p>
            <p>Area: {foundCountry.area}km2</p>
            {foundCountry.borders.map((border)=>{
                return <Link to= {`/countries/${border}`}>Borders: {border}</Link>
            })}
            
        </div>
    )
} 


export default CountriesDetails