import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WhyUsSection = () => {
  return (
    <Container className="why-us-container mt-5 mx-auto mb-0">
      <p className="sub-judul" style={{ marginBottom: '16px' }}>
        Why Us?
      </p>
      <p className="text-content-light">
        Mengapa harus pilih Binar Car Rental?
      </p>
      <Row justify-content-between mx-auto>
        <Col md>
          <Card className="card-why-us-container">
            <Card.Body>
              <img src="https://i.ibb.co/ZGyq0vS/icon-complete.png" alt="Mobil Lengkap Icon" />
              <h5 className="card-title">Mobil Lengkap</h5>
              <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md>
          <Card className="card-why-us-container">
            <Card.Body>
              <img src="https://i.ibb.co/xGzd8vB/icon-price.png" alt="Harga Murah Icon" />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md>
          <Card className="card-why-us-container">
            <Card.Body>
              <img src="https://i.ibb.co/y4hLK23/icon-24hrs.png" alt="Layanan 24 Jam Icon" />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md>
          <Card className="card-why-us-container">
            <Card.Body>
              <img src="https://i.ibb.co/n65kL50/icon-professional.png" alt="Sopir Profesional Icon" />
              <h5 className="card-title">Sopir Profesional</h5>
              <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUsSection;