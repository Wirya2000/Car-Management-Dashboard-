import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurService = () => {
	return (
		<Container className="article-our-service-container mt-5 mb-5">
			<Row>
				<Col md>
					<img src="https://i.ibb.co/QCqbh0Z/img-service.png" className="service-image" alt="Service" />
				</Col>
				<Col md className="our-service-text-container">
					<p className="sub-title">Best Car Rental for any kind of trip in (Lokasimu)!</p>
					<p className="text-content-light">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
					</p>
					<ul id="remove-bullet" style={{ position: "relative" }} className="m-0 p-0">
						<li className="our-service-li">
							<img src="https://i.ibb.co/wcNnMBh/Ellipse-22.png" className="icon-ellipse" alt="Ellipse" /> <img src="https://i.ibb.co/kMXHnpm/fi-check.png" className="icon-check" alt="Check" /> <p className="our-service-list">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
						</li>
						<li className="our-service-li">
							<img src="https://i.ibb.co/wcNnMBh/Ellipse-22.png" className="icon-ellipse" alt="Ellipse" /> <img src="https://i.ibb.co/kMXHnpm/fi-check.png" className="icon-check" alt="Check" /> <p className="our-service-list">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
						</li>
						<li className="our-service-li">
							<img src="https://i.ibb.co/wcNnMBh/Ellipse-22.png" className="icon-ellipse" alt="Ellipse" /> <img src="https://i.ibb.co/kMXHnpm/fi-check.png" className="icon-check" alt="Check" /> <p className="our-service-list">Sewa Mobil Jangka Panjang Bulanan</p>
						</li>
						<li className="our-service-li">
							<img src="https://i.ibb.co/wcNnMBh/Ellipse-22.png" className="icon-ellipse" alt="Ellipse" /> <img src="https://i.ibb.co/kMXHnpm/fi-check.png" className="icon-check" alt="Check" /> <p className="our-service-list">Gratis Antar - Jemput Mobil di Bandara</p>
						</li>
						<li className="our-service-li">
							<img src="https://i.ibb.co/wcNnMBh/Ellipse-22.png" className="icon-ellipse" alt="Ellipse" /> <img src="https://i.ibb.co/kMXHnpm/fi-check.png" className="icon-check" alt="Check" /> <p className="our-service-list">Layanan Airport Transfer / Drop In Out</p>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default OurService;
