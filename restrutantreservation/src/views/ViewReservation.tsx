import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditReservationForm from "../components/EditReservationForm"; 

type Reservation = {
  name: string;
  email: string;
  numberOfPeople: number;
  phoneNumber: string;
  date: string;
}

const ViewReservation: React.FC = () => {
  const [data, setData] = useState<Reservation[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedData = localStorage.getItem("reservationData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (location.state?.updated) {
      const storedData = localStorage.getItem("reservationData");
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }
  }, [location.state]);

  const handleEdit = (index: number) => {
    const selectedReservation = data[index];
    if (selectedReservation) {
      navigate("/EditReservationForm", { state: { reservation: selectedReservation } });
    } else {
      console.error("Selected reservation does not exist.");
    }
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("reservationData", JSON.stringify(newData));
  };

  return (
    <div className="container mt-4 py-5 text-brown">
    <div className="row justify-content-center">
      <h1 className="text-center mt-auto py-4 text-brown">Reservation</h1>
      <div className="table-responsive">
      <table className="table table-bordered py-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number of People</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.name}</td>
              <td>{reservation.email}</td>
              <td>{reservation.numberOfPeople}</td>
              <td>{reservation.phoneNumber}</td>
              <td>{reservation.date}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default ViewReservation;