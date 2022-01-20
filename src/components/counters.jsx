import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    state = { 
        counters
     } 
    render() { 
        return (
            <div>

                <Counter/>
            </div>
        );
    }
}

export default Counters;