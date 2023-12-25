"use client"

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewForm = () => {
    const [review, setReview] = useState({
        name: '',
        rating: '',
        comments: '',
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Add logic to handle the submission of the review (e.g., API call, state update, etc.)
        console.log('Review submitted:', review);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={review.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    as="select"
                    name="rating"
                    value={review.rating}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select rating</option>
                    <option value="5">5 stars</option>
                    <option value="4">4 stars</option>
                    <option value="3">3 stars</option>
                    <option value="2">2 stars</option>
                    <option value="1">1 star</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your comments"
                    name="comments"
                    value={review.comments}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit Review
            </Button>
        </Form>
    );
};

export default ReviewForm;
