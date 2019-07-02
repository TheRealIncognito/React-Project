import React, {Component} from 'react';
import PortfolioItems from './portfolioItems';

export default class portfolio extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    
    this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: [
            {title: "Quip", category: "eCommerce"},
            {title: "Eventbrite", category: "Scheduling"},
            {title: "Ministry Safe", category: "Enterprise"},
            {title: "SwingAway", category: "eCommerce"}
        ]
    };
    this.handleFilter = this.handleFilter.bind(this);
}

handleFilter(filter) {
    this.setState({
        data: this.state.data.filter (item => {
        return item.category === filter;
    })
});
}
portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe"];

    return data.map(item => {
        return <PortfolioItems title={item} url={"google.com"}/>;       
        }
    );
}

render() {
    if (this.state.isLoading) {
        return<div>Loading...</div>
    }
    return (
        <div>
    <h2>{this.state.pageTitle}</h2>

        
        <hr/>
        <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
        <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
        <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
        
        {this.portfolioItems()}

        </div>
    );
}
} 
