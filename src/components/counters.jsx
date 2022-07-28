import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, counters, onDelete, onIncrement} = this.props;


        return (
        <div>
            <button
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
          {counters.map(counter =>
          <Counter
            key={counter.id}
            // bubbling event to parent & using properties from parent component
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
                )}
        </div>);
    }
}

export default Counters;