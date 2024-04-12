import React from "react";
import styles from './Card.module.css'
import Card from "../Card/Card";

const CardList = ({ namesList, deleteFun } ) => {
    const cards = namesList.map((id, ...otherProps) =>
        <Card key={id}{...otherProps.id} id={id} deleteFun={deleteFun} />);
    return <div>{cards}</div>
}


export default CardList; 