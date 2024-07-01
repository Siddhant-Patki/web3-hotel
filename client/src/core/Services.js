import React, { useState } from 'react';
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Row, Col, Button, Form, FormGroup, Label, Input
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/4.jpeg';

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCardName: "",
            newCardDetails: "",
            newCardAdditionalInfo: "",
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddCard = () => {
        // Create a new card object based on user input
        const newCard = {
            name: this.state.newCardName,
            details: this.state.newCardDetails,
            additionalInfo: this.state.newCardAdditionalInfo,
        };

        // Add the new card to the existing data
        this.props.addCard(newCard);

        // Clear the form fields
        this.setState({
            newCardName: "",
            newCardDetails: "",
            newCardAdditionalInfo: "",
        });
    };

    render() {
        return (
            <div className="turf-card-container">
                <Row style={{ "margin": "100px" }}>
                    {this.props.data.map((card, index) => (
                        <Col key={index} sm="4">
                            <Card style={{ width: '20rem', marginBottom: '20px' }}>
                                <img
                                    alt="Sample"
                                    src={Logo}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        <section>
                                            <h1>{card.name}</h1>
                                        </section>
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        {card.details}
                                    </CardSubtitle>
                                    <CardText>
                                        {card.additionalInfo}
                                    </CardText>
                                    <Button>
                                        Book Now
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                    {/* Form for adding a new card */}
                    <Col sm="4">
                        <Card style={{ width: '20rem', marginBottom: '20px' }}>
                            <CardBody>
                                <CardTitle tag="h5">Add New Card</CardTitle>
                                <Form>
                                    <FormGroup>
                                        <Label for="newCardName">Name</Label>
                                        <Input
                                            type="text"
                                            name="newCardName"
                                            id="newCardName"
                                            value={this.state.newCardName}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="newCardDetails">Details</Label>
                                        <Input
                                            type="text"
                                            name="newCardDetails"
                                            id="newCardDetails"
                                            value={this.state.newCardDetails}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="newCardAdditionalInfo">Additional Info</Label>
                                        <Input
                                            type="text"
                                            name="newCardAdditionalInfo"
                                            id="newCardAdditionalInfo"
                                            value={this.state.newCardAdditionalInfo}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <Button onClick={this.handleAddCard}>Add Card</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Services;
