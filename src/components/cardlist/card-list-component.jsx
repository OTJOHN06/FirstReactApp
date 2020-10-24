import React from 'react';
import './card-list.css'

export const CardList = (props) => {
    console.log(props);
    return <h1>{props.children}</h1>
}