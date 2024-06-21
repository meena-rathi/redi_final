import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged,User } from "firebase/auth";

type FormData = {
  name: string;
  email: string;
  numberOfPeople: number;
  phoneNumber: string;
  date: string;
};

const registrationSegma = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  numberOfPeople: Yup.number()
    .required("Number of people is required")
    .min(1, "Must be at least 1")
    .max(8, "Cannot exceed 8"),
  phoneNumber: Yup.string()
    .matches(/^(\+49)?\d{10,11}$/, "Phone number must be 10 or 11 digits with or without '+49'")
    .required("Phone number is required"),
  date: Yup.date().required("Date is required"),
});

const ReservationForm: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserName(user.displayName || '');
      }
    });
  }, []);

  return (
  <div className="container mt-4 py-5 text-brown">
    <div className="row justify-content-center">
      <h1 className="text-center mt-auto py-1 text-brown">Reservation</h1>
      <div className="col-lg-6">
        <Formik<FormData>
          initialValues={{
            name: userName, // Prefill the name field with the user's display name
            email: "",
            numberOfPeople: 0,
            phoneNumber: "",
            date: new Date().toISOString().split("T")[0],
            }}
            enableReinitialize={true}
            validationSchema={registrationSegma}
            onSubmit={(values, { resetForm, setErrors }) => {
              const existingData = JSON.parse(localStorage.getItem("reservationData") || "[]");
              const emailExists = existingData.some((res: any) => res.email === values.email);
              if (emailExists) {
                setErrors({ email: "Email already exists" });
              } else {
                const newData = [...existingData, values];
                localStorage.setItem("reservationData", JSON.stringify(newData));
                console.log(values);
                resetForm();
                navigate("/ViewReservation");
              }
            }}
          >
            <Form>
              <div className="mb-3 d-flex flex-column flex-lg-row justify-content-between">
                <div className="flex-fill me-lg-3 mb-lg-0 mb-3">
                  <label htmlFor="name" className="mb-1">Name:</label>
                  <Field type="text" name="name" className="form-control" placeholder="Name"/>
                  <ErrorMessage name="name" component="div" className="error"/>
                </div>
                <div className="flex-fill">
                  <label htmlFor="email" className="mb-1">Email:</label>
                  <Field type="email" name="email" className="form-control" placeholder="Email"/>
                  <ErrorMessage name="email" component="div" className="error"/>
                </div>
              </div>
              <div className="mb-3 d-flex flex-column flex-lg-row justify-content-between">
                <div className="flex-fill me-lg-3 mb-lg-0 mb-3">
                  <label htmlFor="numberOfPeople" className="mb-1">Number of People:</label>
                  <Field type="number" name="numberOfPeople" className="form-control" placeholder="Number of People"/>
                  <ErrorMessage name="numberOfPeople" component="div" className="error"/>
                </div>
                <div className="flex-fill">
                  <label htmlFor="phoneNumber" className="mb-1">Phone Number:</label>
                  <Field type="text" name="phoneNumber" className="form-control" placeholder="Phone Number"/>
                  <ErrorMessage name="phoneNumber" component="div" className="error"/>
                </div>
              </div>
              <div className="mb-3 d-flex flex-column flex-lg-row justify-content-between">
                <div className="flex-fill me-lg-3 mb-lg-0 mb-3">
                  <label htmlFor="date" className="mb-1">Date:</label>
                  <Field type="date" name="date" className="form-control" placeholder="Date"/>
                  <ErrorMessage name="date" component="div" className="error"/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;