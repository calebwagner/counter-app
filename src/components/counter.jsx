import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // () => inherit "this" keyword
    handleIncrement = () => {
        console.log("Increment Clicked", this);
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }
}
 
export default Counter;