import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
        <div>
            <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
          {this.props.counters.map(counter =>
          <Counter
            key={counter.id}
            // bubbling event to parent & using properties from parent component
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
                )}
        </div>);
    }
}

export default Counters;