
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placekitten.com/800/400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Embarking on the Wizarding Adventure</h3>
                    <p>Relive the enchantment of opening Harry Potter and the Philosophers Stone as Harry discovers his wizarding world, from Diagon Alley to the Hogwarts Express—an introduction to the spellbinding adventure that captured our hearts.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placekitten.com/800/401"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Unraveling Mysteries and Facing Darkness</h3>
                    <p>Celebrate the enduring friendships of Harry, Hermione, and Ron—a trio whose bonds at Hogwarts exemplify the series heartwarming message of loyalty, unity, and the magic of shared experiences.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placekitten.com/800/402"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Unravel the mysteries and face the darkness alongside our beloved characters as they confront Lord Voldemort and the secrets of the Deathly Hallows—a gripping journey of courage, sacrifice, and the eternal struggle between light and dark.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
