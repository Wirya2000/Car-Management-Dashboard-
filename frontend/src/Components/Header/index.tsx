import React from 'react';
import { Col, Button } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <div className="row">
      <Col md={6} className="title-container my-auto">
        <p className="text-title" style={{ maxWidth: '568px' }}>
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </p>
        <p className="app-description">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
        </p>
        <Button href="/cars" className="btn btn-green btn-sewa-mobil">Mulai Sewa Mobil</Button>
      </Col>
      <Col md={6} className="car-image-container p-0 mb-0 me-0 mt-3">
        <img src="https://i.ibb.co/LkcKw8w/img-car.png" className="car-image" style={{ width: '100%' }} alt="Car" />
      </Col>
    </div>
  );
};

export default Header;