import { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component{
  state = {
    counters:[
    {id: 1, value: 0},
    {id: 2, value: 2},
    {id: 3, value: 7},
    {id: 4, value: 4}
    ]
 };

 constructor(props) {
  super(props); // calls constructor of parent class
  console.log("App - Constructor", this.props); // this.props is an empty Object
  // this.state = this.props.something
 };

//  componentDidUpdate(prevProps, prevState) {
//   console.log("prevProps", prevProps);
//   console.log("prevState", prevState);
  // if(prevProps.counter.value !== this.props.counter.value) {
    // Ajax call and get new data from the server
  // }
// }

 // this is called after the component is rendered into DOM
 componentDidMount() {
  // place for Ajax calls
  console.log("App - Mounted");
 }

 handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters});
 }

 handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counters})
 }

 handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters});
 }

  render() {
    console.log("App - Rendered");

  return (
    <div>
      <NavBar
      totalCounters={this.state.counters.filter(counter => counter.value > 0).length}
      />
      <main className='container'>
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        />
      </main>
    </div>
  );
}
}

export default App;
