import React from "react"
import InputForm from './InputForm.js'
import axios from "axios"

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers() {
        axios.get("/getItems")
            .then(res => {
                this.setState({
                    items: res.data,
                    isLoaded: true
                })
            })
            .catch(err => {
                this.setState({
                    error: err,
                    isLoaded: true
                })
            })
    }


    render() {

        if (this.state.error) {
            return <div>Error: {this.state.error}</div>
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <ul>
                        {this.state.items.map(item => (
                            <li key={item.name}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </li>
                        ))}
                    </ul>
                    <InputForm />
                </div>
            )
        }


        return <h1>hallo</h1>
    }
}

export default MyComponent