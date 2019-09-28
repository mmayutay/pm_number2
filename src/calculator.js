import React, {Component} from 'react';

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : 0,
            firstVal : 0,
            seconVal : 0
        }
    }
    firstVal(e){
        this.setState({firstVal : Number(e.target.value)})
    }
    seconVal(e){
        this.setState({seconVal : Number(e.target.value)})
    }
    addition(e){
        e.preventDefault();
        this.setState({value : (this.state.firstVal) + (this.state.seconVal)})
    }
    subtraction(e){
        e.preventDefault();
        this.setState({value : (this.state.firstVal - this.state.seconVal)})
    }
    multiplication(e) {
        e.preventDefault();
        this.setState({value : (this.state.firstVal * this.state.seconVal)})
    }
    division (e){
        e.preventDefault();
        this.setState({value : (this.state.firstVal / this.state.seconVal)})
    }
    exponent(e){
        e.preventDefault();
        this.setState({value : this.state.firstVal ** this.state.seconVal})
    }
    render(){
        return (
            <div>
                <h1>Calculator</h1>
                <h1>{this.state.value}</h1>
                <input type="number" placeholder="First Number" onChange={(e) => this.firstVal(e)}/>
                <input type="number" placeholder="Second Number" onChange={(e) => this.seconVal(e)}/>
                <button onClick={(e) => this.addition(e)}>Addition{" "}</button>
                <button onClick={(e) => this.subtraction(e)}>Subtraction{" "}</button><br></br>
                <button onClick={(e) => this.multiplication(e)}>Multiplication{" "}</button>
                <button onClick={(e) => this.division(e)}>Division{" "}</button><br></br>
                <button onClick={(e) => this.exponent(e)}>Exponential{" "}</button>
            </div>
        )
    }
}

export default Calculator;