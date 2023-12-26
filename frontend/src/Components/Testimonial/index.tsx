import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import TestimonialCarousel from "./testimonialCarousel";

const TestimonialSection = () => {
	return (
		<Container className="testimonial-container mt-5">
			<p className="sub-judul text-center">
        Testimonial
			</p>
			<p className="text-content-light text-center">
        Berbagai review positif dari para pelanggan kami
			</p>
			<Container className="text-center my-3">
				<Row className="my-auto justify-content-center">
					<Carousel id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
						<TestimonialCarousel />
					</Carousel>
					<a href="#recipeCarousel" role="button" data-bs-slide="prev" style={{ textDecoration: "none" }}>
						<img src="https://i.ibb.co/RYt8QMt/Left-button.png" alt="Previous" />
					</a>
					<a href="#recipeCarousel" role="button" data-bs-slide="next" style={{ textDecoration: "none" }}>
						<img src="https://i.ibb.co/RQRD9KZ/Right-button.png" alt="Next" />
					</a>
				</Row>
			</Container>
		</Container>
	);
};

export default TestimonialSection;
