import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import { useQuery } from "react-query";
import PreLoader from "../../components/PreLoader/PreLoader";
import { TiLocationOutline, TiTime } from "react-icons/ti";
import BookingsChart from "../../components/BookingsChart/BookingsChart";

const AdminDashboard = () => {
  const fetchBookings = async () => {
    const response = await axios.get(
      "http://localhost:4040/api/v1/shine/bookings/getBookings"
    );
    return response.data;
  };

  const {
    data: bookings,
    isLoading,
    isError,
  } = useQuery(["bookings"], fetchBookings);

  if (isLoading) return <PreLoader />;
  if (isError) return <p>Error fetching data</p>;

  // Process the booking data to count the number of bookings for each city
  const cityCounts = bookings.reduce((acc, booking) => {
    acc[booking.location] = (acc[booking.location] || 0) + 1;
    return acc;
  }, {});

  const bookingsData = [
    cityCounts["Chennai"] || 0,
    cityCounts["Mumbai"] || 0,
    cityCounts["Hyderabad"] || 0,
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        
        <div className="chart-container">
          <BookingsChart bookingsData={bookingsData} />
        </div>
        <h1 className="title">All Bookings</h1>
        <div className="bookings">
          
          {bookings.map((booking, index) => (
            <div className="booking-item" key={index}>
              <div className="booking-service">
                {booking.service === "car-wash" ? (
                  <p>Car Wash</p>
                ) : booking.service === "car-service" ? (
                  <p>Car Service</p>
                ) : (
                  <p>Car Repair</p>
                )}
              </div>
              <div className="booking-details">
                <p>
                  <TiTime /> {booking.timeSlot}
                </p>
                <p>
                  <TiLocationOutline /> {booking.location}
                </p>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
