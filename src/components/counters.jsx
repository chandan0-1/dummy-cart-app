import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    state = { 
        counters :[
            {id:1, value: 4},
            {id:2, value: 2},
            {id:3, value: 0},
            {id:4, value: 1}
        ]
     } 

     onDel = (counter_id) => {
         this.setState({counters: this.state.counters.filter(counter => counter.id !== counter_id)})
     }
    render() { 
        return (
            <div>
                { this.state.counters.map(counter => (
                <Counter 
                key={counter.id}
                counter = {counter}
                onDel = {this.onDel}
                /> 
                ))}
            </div>
        );
    }
}

export default Counters;