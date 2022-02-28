import React from 'react'
import { Link } from "react-router-dom";


const CountriesList = (props) =>{
    return(
        <div className= "countriesList">
            {props.countries.map(country=>{
                return(
                <Link to= {`/countries/${country.alpha3Code}`}>Country Name:{country.name.official}</Link>
                )

            })}
        </div>
    )
}


export default CountriesList