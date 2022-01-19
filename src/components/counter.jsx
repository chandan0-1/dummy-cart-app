import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        items :[]
      } 
    getItemsList(){
        if (this.state.items.length === 0) return <p>There is no Items!</p>;
        return <ul>{this.state.items.map(item => <li key={item}>{item} </li>)}</ul>;
    }
    render() { 
        const { count } = this.state
        

        return (
            <div>
                <button type="button" class="btn btn-primary m-3 position-relative ">
                    Cart
                    <span class={this.getBadgeClasses()}>
                        {count === 0 ? '' : count}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>

                <span className={this.getBadgeClasses()}>  </span>
                <button className='btn btn-success btn-sm rounded-pill'> add +</button>


                {/* Rendering the itemlist */}
                { this.getItemsList() }
                {/* ------------OR--------------- */}
                { this.state.items.length === 0 && "There is no items present!"}
                
            </div>
        );
    }

    getBadgeClasses() {
        let show_item_no = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        let classes = "d-none";
        return this.state.count === 0 ? classes : show_item_no;
    }
}
 
export default Counter;