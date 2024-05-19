import React from "react";
import "./Dashboard.css";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useQuery } from "react-query";
import PreLoader from '../../components/PreLoader/PreLoader'

import { TiLocationOutline, TiTime } from "react-icons/ti";

const Dashboard = () => {
  const user = useUser();
  const userId = user.user.id;

  const fetchBookings = async (userId) => {
    const response = await axios.get(
      `https://shine-server.vercel.app/api/v1/shine/bookings/getBookingsOfUser/${userId}`
    );
    return response.data;
  };

  const { data: bookings, isLoading, isError } = useQuery(
    ["bookings", userId],
    () => fetchBookings(userId)
  );

  if (isLoading) return <PreLoader/>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="dashboard">
      <h1 className="title">Your Bookings</h1>
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
      <div className="dashboard-img"></div>
    </div>
  );
};

export default Dashboard;
