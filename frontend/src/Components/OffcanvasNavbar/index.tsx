import React from "react";
import { Nav, Button } from "react-bootstrap";

const OffcanvasNavbar = () => {
	return (
		<>
			<Nav.Item>
				<Nav.Link href="#" className="nav-link active" aria-current="page">Our Service</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" className="nav-link">Why Us</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" className="nav-link">Testimoni</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" className="nav-link">FAQ</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Button variant="green" className="btn btn-green">Register</Button>
			</Nav.Item>
		</>
	);
};

export default OffcanvasNavbar;