import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value ,
        items :["Mobile", "Watch", "Laptop", "Bag"]
      } 

    handleIncremet = () =>{
        // this.setState({count: this.state.count + 1})
        this.setState({value : this.state.value + 1})
    }
    handleDecrement = () =>{
        if (this.state.value > 0){
            this.setState({ value : this.state.value - 1})
        }
    }

    
    render() { 
        const { value } = this.state

        return (
            <div>
                <button type="button" className="btn btn-primary m-3 position-relative ">
                    Cart
                    <span className={this.getBadgeClasses()}>
                        {value === 0 ? '' : value}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>

                <span className={this.getBadgeClasses()}>  </span>
                <button onClick={this.handleIncremet} className='btn btn-success btn-sm rounded-pill'> ADD + </button>
                <button onClick={this.handleDecrement} className='btn btn-dark btn-sm m-2'> - </button>
                <button onClick={() => this.props.onDel(this.props.counter.id)} className="btn btn-sm btn-danger m-2 ">X</button>
                {/* <ul>
                    {this.state.items.map(item => <li key={item}>{item} </li>)} 
                </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let show_item_no = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        let classes = "d-none";
        return this.state.value === 0 ? classes : show_item_no;
    }
}
 
export default Counter;