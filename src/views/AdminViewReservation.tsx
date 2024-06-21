import React from "react";

interface Reservation {
  name: string;
  email: string;
  numberOfPeople: number;
  phoneNumber: string;
  date: string;
}

interface AdminReservationViewProps {
  reservations: Reservation[];
}

const AdminViewReservation: React.FC<AdminReservationViewProps> = ({ reservations }) => {
  return (
    <div>
      <h2>Admin Reservation View</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number of People</th>
            <th>Phone Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.name}</td>
              <td>{reservation.email}</td>
              <td>{reservation.numberOfPeople}</td>
              <td>{reservation.phoneNumber}</td>
              <td>{reservation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewReservation;