import React, { useState } from "react";
import "./OrderBookingComp.css";
import carRepair from "../../assets/images/car-repair.png";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {
  MdCarRepair,
  MdLocalCarWash,
  MdNavigateNext,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import carCheck from "../../assets/images/car-check.png";
import carWash from "../../assets/images/car-wash.png";
import logo from "../../assets/images/shine-logo.png";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

const OrderBookingComp = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [location, setLocation] = useState("");

  const handleServiceChange = (selectedService) => {
    setService(selectedService);
    console.log("Service selected:", service);
  };

  const handleSlotChange = (selectedSlot) => {
    setTimeSlot(selectedSlot);
    console.log("Time slot selected:", timeSlot);
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
    console.log("Selected Location: ", location);
  };
  const handleBooking = () => {
    const userId = user.user.id;
    const bookingDetails = { userId, service, timeSlot, location };
    console.log(bookingDetails);

    axios
      .post(
        "https://shine-server.vercel.app/api/v1/shine/bookings/postBooking",
        bookingDetails
      )
      .then(() => {
        console.log("Booking Success");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Client side error posting data", error);
        alert("Please select booking details");
      });
  };
  return (
    <div className="order-booking-comp">
      
      <div className="grid-columns">
        <div className="column">
          <div className="services">
            <div className="service-item">
              <div>
                <MdLocalCarWash color="white" className="service-icon" />
              </div>

              <div
                className="service-content"
                onClick={() => handleServiceChange("car-wash")}
              >
                <h2>Car Wash</h2>
                <p>Restore Your Ride's Brilliance with Our Expert Wash.</p>
              </div>
            </div>
            <div className="service-item">
              <div>
                <MdCarRepair color="white" className="service-icon" />
              </div>

              <div
                className="service-content"
                onClick={() => handleServiceChange("car-repair")}
              >
                <h2>Car Repair</h2>
                <p>Keep Your Vehicle Running Smoothly with Our Care</p>
              </div>
            </div>
            <div className="service-item">
              <div>
                <MdOutlineMiscellaneousServices
                  color="white"
                  className="service-icon"
                />
              </div>
              <div
                className="service-content"
                onClick={() => handleServiceChange("car-service")}
              >
                <h2>Car Service</h2>
                <p>Trust Us - Revive Your Vehicle's Performance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="time-slots">
            <div
              className="slot-container"
              onClick={() => handleSlotChange("8-10")}
            >
              <p>
                <span>8</span>am - <span>10</span>am
              </p>
            </div>

            <div
              className="slot-container"
              onClick={() => handleSlotChange("10-12")}
            >
              <p>
                <span>10</span>am - <span>12</span>am
              </p>
            </div>
            <div
              className="slot-container"
              onClick={() => handleSlotChange("12-2")}
            >
              <p>
                <span>12</span>pm - <span>2</span>pm
              </p>
            </div>
            <div
              className="slot-container"
              onClick={() => handleSlotChange("2-4")}
            >
              <p>
                <span>2</span>pm - <span>4</span>am
              </p>
            </div>
            <div
              className="slot-container"
              onClick={() => handleSlotChange("4-6")}
            >
              <p>
                <span>4</span>pm - <span>6</span>pm
              </p>
            </div>
            <div
              className="slot-container"
              onClick={() => handleSlotChange("6-8")}
            >
              <p>
                <span>6</span>pm - <span>8</span>pm
              </p>
            </div>
          </div>

          <div className="locations">
            <div
              className="location"
              onClick={() => handleLocationChange("Chennai")}
            >
              <h2>
                <FaLocationCrosshairs /> Chennai
              </h2>
            </div>

            <div
              className="location"
              onClick={() => handleLocationChange("Mumbai")}
            >
              <h2>
                <FaLocationCrosshairs /> Mumbai
              </h2>
            </div>
            <div
              className="location"
              onClick={() => handleLocationChange("Hyderabad")}
            >
              <h2>
                <FaLocationCrosshairs height={95} />
                Hyderabad
              </h2>
            </div>
          </div>

          <SignedIn>
            <button onClick={handleBooking}>
              Book Now <MdNavigateNext color="next-icon" />
            </button>
          </SignedIn>
          <SignedOut>
            <Link to="https://quick-moth-67.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2F">
              <button>
                Book Now <MdNavigateNext color="next-icon" />
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default OrderBookingComp;
