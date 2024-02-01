import React from 'react';
import { Col, Card, Row, Carousel } from 'react-bootstrap';

const TestimonialCarousel: React.FC = () => {
  const testimonials = [
    {
      imageSrc: 'https://i.ibb.co/56zr0B1/img-photo.png',
      stars: Array(5).fill('https://i.ibb.co/7Xc4fDD/Star.png'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      location: 'John Dee 32, Bromo',
    },
    {
      imageSrc: 'https://i.ibb.co/56zr0B1/img-photo.png',
      stars: Array(5).fill('https://i.ibb.co/7Xc4fDD/Star.png'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      location: 'John Dee 32, Bromo',
    },
    {
      imageSrc: 'https://i.ibb.co/56zr0B1/img-photo.png',
      stars: Array(5).fill('https://i.ibb.co/7Xc4fDD/Star.png'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      location: 'John Dee 32, Bromo',
    },
  ];

  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index} className={index === 0 ? 'active' : ''}>
          <Col md={12}>
            <Card className="d-block mx-auto" style={{ maxWidth: '619px', padding: '24px', backgroundColor: '#F1F3FF' }}>
              <Card.Body className="card-image-text">
                <Row>
                  <Col md={3} className="m-auto">
                    <img src={testimonial.imageSrc} style={{ width: '80px' }} alt={`User Avatar ${index + 1}`} />
                  </Col>
                  <Col md={9}>
                    <div className="testimonial-content">
                      <div className="bintang">
                        {testimonial.stars.map((star, starIndex) => (
                          <img key={starIndex} src={star} alt={`Star ${starIndex + 1}`} />
                        ))}
                      </div>
                      <p className="card-text text-content-light" style={{ margin: '0', textAlign: 'start' }}>
                        {testimonial.content}
                      </p>
                      <p className="card-text text-content">{testimonial.location}</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
