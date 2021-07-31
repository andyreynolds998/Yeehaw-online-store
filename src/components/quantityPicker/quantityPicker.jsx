import React, { Component } from 'react';
import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = {
        value: 1,
        name: "Andrew",
    };

    render() { 
        return (
            <div className="quantity-picker">
                <button onClick={this.increase} className="btn btn-sm btn-dark">
                    +
                </button>
                <label className="value">{this.state.value}</label>
                <button disabled={this.state.value === 1} onClick={this.decrease} className="btn btn-sm btn-dark">
                    -
                </button>
            </div>
        );
    }

    increase = () => {
        let val =  this.state.value + 1;
        this.setState({ value : val});
        this.props.onQuantityChange(val);
        //let current = this.state.value + 1;
        //current = current +1;
        //current += 1;
        //this.setState({ value: current}); // inv js functions vs arrow functions?
    };
    decrease = () => {
        let val = this.state.value - 1;
        if (val > 0){
            this.setState({ value: val});
            this.props.onQuantityChange(val);
        }
       
    }
}
 
export default QuantityPicker;
