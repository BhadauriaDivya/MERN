import React from 'react'
import './Style.css';
import Design from './Design';

const Main = () => {
  return (
    <div>
        <div>
        <h1>Weather</h1>
        <br/>
        </div>
        <form class="container d-flex" role="search">
            <input class="form-control me-3" id="colorbg" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form><br/>
        <span class="fs-4 text-primary hide">Enter a city name</span>
        <Design/>
    </div>
  )
}

export default Main