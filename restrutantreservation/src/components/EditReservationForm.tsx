import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";

const EditReservationForm: React.FC = () => {
  const location = useLocation();
  const reservation = location.state?.reservation || {};
  const navigate = useNavigate();
  const editSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    numberOfPeople: Yup.number().required("Number of people is required").min(1, "Must be at least 1").max(8, "Cannot exceed 8"),
    phoneNumber: Yup.string().matches(/^(\+49)?\d{10,11}$/, "Phone number must be 10 or 11 digits with or without '+49'").required("Phone number is required"),
    date: Yup.date().required("Date is required"),
  });

  return (
    <div className="container mt-4 text-white">
      <div className="row justify-content-center">
        <h1 className="text-center">Edit Reservation</h1>
        <div className="col-lg-6">
          <Formik
            initialValues={reservation}
            validationSchema={editSchema}
            onSubmit={(updatedReservation) => {
              console.log("Submitting form with updated reservation:", updatedReservation);
              const storedData = JSON.parse(localStorage.getItem("reservationData") || "[]");
              const updatedData = storedData.map((res: any) =>
                res.email === reservation.email ? { ...updatedReservation } : res
              );
              localStorage.setItem("reservationData", JSON.stringify(updatedData));
              navigate("/ViewReservation", { state: { updated: true } });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="mb-1">Name:</label>
                  <Field type="text" name="name" className="form-control" placeholder="Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="mb-1">Email:</label>
                  <Field type="email" name="email" className="form-control" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div className="mb-3">
                  <label htmlFor="numberOfPeople" className="mb-1">Number of People:</label>
                  <Field type="number" name="numberOfPeople" className="form-control" placeholder="Number of People" />
                  <ErrorMessage name="numberOfPeople" component="div" className="error" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="mb-1">Phone Number:</label>
                  <Field type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" />
                  <ErrorMessage name="phoneNumber" component="div" className="error" />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="mb-1">Date:</label>
                  <Field type="date" name="date" className="form-control" />
                  <ErrorMessage name="date" component="div" className="error" />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Save</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditReservationForm;