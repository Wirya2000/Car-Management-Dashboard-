import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css'; // Make sure to create this CSS file for your custom styles

const CariPage = () => {
  return (
    <>
      <Container>
        <header className="header my-auto w-100 p-0">
          <Navbar className="navbar navbar-expand-lg">
            <Container className="container-fluid mx-5">
              <Navbar.Brand className="navbar-text">
                <Container className="logo" />
              </Navbar.Brand>
              <Button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </Button>
              <Container className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width: '50%'}}>
                <Container className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                  <Button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </Container>
                <Container className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Our Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Why Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Testimoni</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn btn-green">Register</button>
                    </li>
                  </ul>
                </Container>
              </Container>
            </Container>
          </Navbar>
          <Container className="container-fluid">
            <Container className="row">
              <Container className="col-md-6 title-container my-auto">
                <p className="text-title" style={{maxWidth: 568}}>
                  Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                </p>
                <p className="app-description">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <button type="button" className="btn btn-green btn-sewa-mobil">Mulai Sewa Mobil</button>
              </Container>
              <Container className="col-md-6 car-image-container p-0 mb-0 me-0 mt-3">
                <img src="https://i.ibb.co/LkcKw8w/img-car.png" alt="" className="car-image" style={{width: '100%'}} />
              </Container>
            </Container>
          </Container>
        </header>
        <article>
          <Container className="container" style={{width: '73%', borderRadius: 10, backgroundColor: 'white'}}>
            <Container className="row justify-content-between">
              <Container className="col-md-3">
                <p className="card-text text-cari">Tipe Driver</p>
                <select name="tipe_driver" id="tipe_driver" style={{width: '100%'}}>
                  <option value="dengan_sopir">Dengan Sopir</option>
                  <option value="tanpa_sopir">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </Container>
              <Container className="col-md-3">
                <p className="card-text text-cari">Tanggal</p>
                <input type="date" id="tanggal" name="tanggal" style={{width: '100%'}} />
              </Container>
              <Container className="col-md-3">
                <p className="card-text text-cari">Waktu Jemput/Ambil</p>
                <select name="waktu" id="waktu" style={{width: '100%'}}>
                  <option value={'08.00'}>08.00 WIB</option>
                  <option value={'09.00'}>09.00 WIB</option>
                  <option value={'10.00'}>10.00 WIB</option>
                  <option value={'11.00'}>11.00 WIB</option>
                  <option value={'12.00'}>12.00 WIB</option>
                </select>
              </Container>
              <Container className="col-md-3">
                <p className="card-text text-cari">Jumlah Penumpang (optional)</p>
                <input type="text" name="jumlah_penumpang" id="jumlah_penumpang" style={{width: '100%'}} />
              </Container>
              <Container className="col-md-1">
                <button className="btn-green" id="btn_cari">Cari Mobil</button>
              </Container>
            </Container>
          </Container>
          <Container className="container" id="carContainerElement">
            {/* <Container class="card" style="width: 18rem;">
            <img src="images/car01.min.jpg" class="card-img-top" alt="">
              <Container class="card-body">
                <p class="card-text">Nama/Tipe Mobil</p>
                <p class="card-text">Rp 430.000 / hari</p>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur ipsum excepturi voluptatum cumque ea alias dolorem sed.</p>
                <p class="card-text"><i data-feather="users"></i>4 orang</p>
                <p class="card-text"><i data-feather="settings"></i>Manual</p>
                <p class="card-text"><i data-feather="calendar"></i>Tahun 2020</p>
                <a href="#" class="btn btn-green">Pilih Mobil</a>
              </Container>
          </Container> */}
          </Container>
        </article>
        <footer>
          <Container className="container footer mt-5 mx-auto mb-0" style={{margin: '150px auto 0px auto'}}>
            <Container className="row justify-content-between mx-auto">
              <Container className="col-md-3">
                <Container className="footer-address">
                  <p className="card-text text-content-light">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p className="card-text text-content-light">binarcarrental@gmail.com</p>
                  <p className="card-text text-content-light">081-233-334-808</p>
                </Container>
              </Container>
              <Container className="col-md-1">
                <Container className="footer-navigation">
                  <p className="card-text text-content-light">Our services</p>
                  <p className="card-text text-content-light">Why Us</p>
                  <p className="card-text text-content-light">Testimonial</p>
                  <p className="card-text text-content-light">FAQ</p>
                </Container>
              </Container>
              <Container className="col-md-3">
                <Container className="footer-sosmed">
                  <p className="card-text text-content-light">Connect with us</p>
                  <Container className="bintang">
                    <img className="connect-with-us" alt="" src="https://i.ibb.co/zSFrCS2/icon-facebook.png" /><img className="connect-with-us" alt="" src="https://i.ibb.co/2KkNRJB/icon-instagram.png" /><img className="connect-with-us" alt="" src="https://i.ibb.co/5s2RJ9N/icon-twitter.png" /><img className="connect-with-us" alt="" src="https://i.ibb.co/qJNpMXy/icon-mail.png" /><img className="connect-with-us" alt="" src="https://i.ibb.co/dMSppG6/icon-twitch.png" />
                  </Container>
                </Container>
              </Container>
              <Container className="col-md-3">
                <Container className="footer-copyright">
                  <p className="card-text text-content-light" style={{margin: 0}}>Copyright Binar 2022</p>
                  <Container className="logo" />
                </Container>
              </Container>
            </Container>
          </Container>
        </footer>
      </Container>

    </>
  );
};

export default CariPage;


