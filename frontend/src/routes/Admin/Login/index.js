// will do after break about form usage;

import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import SideBar from '../../../Components/Sidebar';
import LoginPage from "../../../Components/Admin/Login";

const CreateCar = () => {
  const [dataForm, setFormData] = useState({});

  // console.log({ dataForm });

  // const handleFormValue = ({ prop, value }) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [prop]: value,
  //   }));
  // };

  // const post = (payload) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(payload);
  //     }, 2000);
  //   });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const carName = e.target.carName.value;
    const harga = e.target.harga.value;
    const availability = e.target.availability.value;
    const year = e.target.year.value;

    const payload = {
      carName,
      harga,
      availability,
      year,
    };

    const response = await fetch("http://localhost:8000/v1/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: payload
    });
    console.log({ response });
  };

  return (
    <>
      {/* <SideBar />
      <Container>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input name="email" placeholder="email" />
          </div>

          <div>
            <input name="password" placeholder="password" />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Container> */}
      <LoginPage />
    </>
  );
};

export default CreateCar;
