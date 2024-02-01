import React from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown, Table, Pagination, Button, Form } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <div className="container-fluid px-0 d-flex">
      {/* Sidebar */}
      <div className="d-flex flex-column vh-100 bg-blue" style={{ width: '4.5rem' }}>
        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <img src="./img/main_icon.png" alt="" className="w-100" />
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a className="nav-link sidebar active" style={{ padding: '.75rem 0' }} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              {/* Add your SVG or icon here */}
              <p className="mb-0 text-white fw-bold fs-12">Dashboard</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="cars.php" className="nav-link sidebar" style={{ padding: '.75rem 0' }} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              {/* Add your SVG or icon here */}
              <p className="mb-0 text-white fs-12">Cars</p>
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="d-flex flex-column w-100 vh-100">
        <div className="w-100 shadow-sm bg-white" style={{ height: '5rem' }}></div>
        <div className="d-flex h-100 overflow-auto">
          <div className="h-100" style={{ width: '15rem' }}>
            <div className="w-100 py-3 ps-4 fw-bold fs-14" style={{ color: '#8A8A8A' }}>DASHBOARD</div>
            <ul className="nav nav-pills nav-flush flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link menu ps-4 text-black fw-bold active" style={{ paddingBottom: '.75rem' }} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">Dashboard</a>
              </li>
            </ul>
          </div>

          <div className="w-100 h-100 bg-grey overflow-auto">
            <div className="p-4">
              <nav className="mt-2" aria-label="breadcrumb">
                <ol className="breadcrumb fs-14">
                  <li className="breadcrumb-item fw-bold">Dashboard</li>
                  <li className="breadcrumb-item">Dashboard</li>
                </ol>
              </nav>
              <p className="mt-3 mb-0 fw-bold fs-20">Dashboard</p>

              {/* List Order */}
              <div className="d-flex flex-row w-auto mt-4 mb-0 fw-bold fs-14">
                <div className="bg-blue" style={{ width: '5px' }}></div>
                <div className="fs-14" style={{ padding: '.1rem .1rem .1rem .5rem' }}>List Order</div>
              </div>
              <div className="mt-3">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th className="bg-blue-2 text-center" style={{ width: '60px' }}>No</th>
                      <th className="bg-blue-2">User Email</th>
                      <th className="bg-blue-2">Car</th>
                      <th className="bg-blue-2">Start Rent</th>
                      <th className="bg-blue-2">Finish Rent</th>
                      <th className="bg-blue-2">Price</th>
                      <th className="bg-blue-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>

                <div className="d-flex w-100 justify-content-between">
                  <div className="d-flex flex-row">
                    <div className="d-flex flex-column me-3">
                      <span className="mb-2 fs-12">Limit</span>
                      <Form.Select className="fs-12">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Form.Select>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="mb-2 fs-12">Jump to page</span>
                      <div className="d-flex flex-row">
                        <Form.Select className="fs-12" style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </Form.Select>
                        <Button className="btn btn-jump-page bg-blue text-white fs-12" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Go</Button>
                      </div>
                    </div>
                  </div>
                  <Pagination style={{ marginTop: '1.7rem' }}>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
