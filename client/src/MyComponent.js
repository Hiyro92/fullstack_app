import React from "react"
import InputForm from './InputForm.js'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

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
            return (
                <Spinner animation="border" role="status" className="col">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        } else if (!this.state.isLoaded) {
            return (
                <Spinner animation="border" variant="secondary" size="lg" className="col"/>
            )
        } else {
            return (
                <Card>
                    <Card.Header><strong>BENUTZER</strong></Card.Header>
                    <Card.Body>
                        <Card.Title>XXX</Card.Title>
                    </Card.Body>

                </Card>
            )
        }
    }
}

export default MyComponent