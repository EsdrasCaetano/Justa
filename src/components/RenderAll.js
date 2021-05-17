import React, { useEffect, useState } from "react";

//import "./Home.css";

const RenderAll = (data) => {

    return (
    <div className="grid">
        {data.map((country, index) => {
            return(
                <div key={index} className="div-card">
                    <img id='imagem' alt={country.name} className='ml-auto' src={country.flag} />
                    <h4>{country.name}</h4>
                </div>
                )  
        })}
        </div>
    )
}

export default RenderAll;