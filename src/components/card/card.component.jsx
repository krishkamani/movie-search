import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
    <img alt="movie" src={`https://robohash.org/${props.movie.id}/?set=set3&size=180x180`}  />
    <h2>{props.movie.name}</h2>
    <p>{props.movie.email}</p>
    </div>
);