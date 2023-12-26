import React from "react";
import { node } from "prop-types";
// import Menu from "../MenuBar";
import "./App.css";
import Header from "../Header";
import OurService from "../OurService";
import WhyUsSection from "../WhyUs";
import TestimonialSection from "../Testimonial";
import NavbarCustom from "../Navbar";

const Layout = ({ children }) => {
	return (
		<div className="app">
			<NavbarCustom />
			<Header />
			<OurService />
			<WhyUsSection />
			<TestimonialSection />
			{/* <Menu /> */}
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: node.isRequired,
};

export default Layout;