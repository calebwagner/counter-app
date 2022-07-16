import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
        {id: 1, value: 0},
        {id: 2, value: 2},
        {id: 3, value: 7},
        {id: 4, value: 4}
        ]
     }

     handleDelete = () => {
        console.log("hi")
     }

    render() {
        return (
        <div>
          {this.state.counters.map(counter =>
          <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}></Counter>)}
        </div>);
    }
}

export default Counters;