import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // () => inherit "this" keyword
    handleIncrement = () => {
        this.setState({value: this.state.count + 1});
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id : 1});
    // }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    render() { 
        return (
        <div>
            {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()} */}
            {/* {this.props.children}  this is the <h4> element  */}
            <h4>Counter #{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={() => this.handleIncrement}
              className="btn btn-secondary btn-sm">Increment</button>
              <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;