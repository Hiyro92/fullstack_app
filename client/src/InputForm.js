import React from 'react'
import axios from "axios"


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        postMessage()
        alert('The value is: ' + this.input.value);
        e.preventDefault();
    }

    postName(data) {
        alert('The value is: ' );
        //console.log('hallo');
        //axios.post('/getUsers', data)
        //.then((res) =>{
        //    console.log(res);
            
        //})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default InputForm