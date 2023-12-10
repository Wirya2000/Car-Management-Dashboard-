import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from "react-bootstrap/esm/Spinner";
import Table from 'react-bootstrap/Table';
import SideBar from '../../../Components/Sidebar';

const API_LIST_CAR = `https://localhost/v1/cars`;

const CarList = () => {
  const [listCar, setListCar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_LIST_CAR}`)
      .then((res) => res.json())
      .then((response) => {
        setListCar(response);
        setLoading(false);
      });
  }, []);

  if (loading && !listCar) return <Spinner />;

  return (
    <>
      <SideBar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Start Rent</th>
            <th>Finish Rent</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {listCar.map((car, index) => (
          <tr>
            <td>{car?.name}</td>
            <td>{car?.category}</td>
            <td>{car?.price}</td>
            <td>{car?.start_rent}</td>
            <td>{car?.finish_rent}</td>
            <td>{car?.created_at}</td>
            <td>{car?.updated_at}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CarList;

// staet & props
// react router dom@6.2
// routing
// handle direction from page A to B
// use Effect
// handling API integration
