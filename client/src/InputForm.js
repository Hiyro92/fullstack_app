import React from 'react'
import axios from "axios"



class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: {
                    value: '',
                    error: ''
                },
                password: {
                    value: '',
                    error: ''
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initStatData() {
        this.setState({
            data: [
                {
                    param: 'name',
                    value: '',
                    error: ''
                },
                {
                    param: 'password',
                    value: '',
                    error: ''
                }
            ]
        })
    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            data: {
                ...this.state.data,
                [name]: {
                    ...this.state.data[name],
                    value
                }
            }
        })
    }

    handleSubmit(event) {
        const data = {
            name: this.state.data.name.value,
            password: this.state.data.password.value
        }

        axios.post('/users', data)
            .then(res => {
                this.initStatData();
            })
            .catch((error) => {
                if (error.response) {
                    const errors = error.response.data.errors
                    console.log(errors);

                    errors.forEach(element => {
                        const name = element.param
                        const error = element.msg

                        console.log(name);
                        console.log(error);


                        this.setState({
                            data: {
                                ...this.state.data,
                                [name]: {
                                    ...this.state.data[name],
                                    error
                                }
                            }
                        })
                    });
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:<input type="text" name='name' value={this.state.data.name.value} onChange={this.handleChange} />
                    </label>
                    <p>{this.state.data.name.error}</p>
                </div>
                <div>
                    <label>
                        Password:<input type="text" name='password' value={this.state.data.password.value} onChange={this.handleChange} />
                    </label>
                    <p>{this.state.data.password.error}</p>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default InputForm