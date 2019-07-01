import React, {Component} from 'react';
import AlphabetItems from './alphabetItems';

export default class alphabet extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }

alphabetItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe"];

    return data.map(item => {
        return <AlphabetItems/>;
    });
}
render() {
    return (
        <div>
        <h2> Portfolio items go here updated...</h2>
        {this.alphabetItems()}

        </div>
    );
}
}
