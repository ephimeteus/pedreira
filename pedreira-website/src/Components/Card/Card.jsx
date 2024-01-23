import { useState } from "react";
import "./Card.css"



const Card = ({ name, description, price })=> {
    
    return(
        <div className="card">
            <img src="coffin1.jpg" alt="Type 1" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>
        )
}

export default Card;