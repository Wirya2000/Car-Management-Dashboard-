import React from "react";
import { Container, Row } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css'; // Make sure to create this CSS file for your custom styles
import Header from "../Components/header";
import NavbarCustom from "../Components/navbar";
import OurService from "../Components/ourService";
import WhyUsSection from "../Components/whyUs";

const LandingPage = () => {
	return (
		<>
			<NavbarCustom />

			<Container fluid>
				<Row>
					<Header />
				</Row>
			</Container>

			<OurService />
			<WhyUsSection />

			{/* Add the rest of your components using React Bootstrap components */}
		</>
	);
};

export default LandingPage;