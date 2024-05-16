import React,{useState} from "react";
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
import { SignedIn, SignedOut ,useUser} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const OrderBookingComp = () => {
  const user=useUser()
  const [service,setService]=useState('');
  const [timeSlot,setTimeSlot]=useState('');
  const [location,setLocation]=useState('')

  const handleBooking=()=>{
    const userId=user.id
    const bookingDetails={userId,service,timeSlot,location};
  }
  return (
    <div className="order-booking-comp">
      <div className="grid-columns">
        <div className="column">
          <div className="services">
            <div className="service-item">
              <div>
                <MdLocalCarWash color="white" className="service-icon" />
              </div>
              <div className="service-content" >
                <h2>Car Wash</h2>
                <p>Restore Your Ride's Brilliance with Our Expert Wash.</p>
              </div>
            </div>
            <div className="service-item">
              <div>
                <MdCarRepair color="white" className="service-icon" />
              </div>
              <div className="service-content" >
                <h2>Car Repair</h2>
                <p>Keep Your Vehicle Running Smoothly with Our Care</p>
              </div>
            </div>
            <div className="service-item" >
              <div>
                <MdOutlineMiscellaneousServices
                  color="white"
                  className="service-icon"
                />
              </div>
              <div className="service-content">
                <h2>Car Service</h2>
                <p>Trust Us - Revive Your Vehicle's Performance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="time-slots">
            <div className="slot-container">
              <p>
                <span>8</span>am - <span>10</span>am
              </p>
            </div>
            <div className="slot-container">
              <p>
                <span>10</span>am - <span>12</span>am
              </p>
            </div>
            <div className="slot-container">
              <p>
                <span>12</span>pm - <span>2</span>pm
              </p>
            </div>
            <div className="slot-container">
              <p>
                <span>2</span>pm - <span>4</span>am
              </p>
            </div>
            <div className="slot-container">
              <p>
                <span>4</span>pm - <span>6</span>pm
              </p>
            </div>
            <div className="slot-container">
              <p>
                <span>6</span>pm - <span>8</span>pm
              </p>
            </div>
          </div>

          <div className="locations">
            <div className="location">
              <h2>
                <FaLocationCrosshairs /> Chennai
              </h2>
            </div>

            <div className="location">
              <h2>
                <FaLocationCrosshairs /> Mumbai
              </h2>
            </div>
            <div className="location">
              <h2>
                <FaLocationCrosshairs height={95} />
                Hyderabad
              </h2>
            </div>
          </div>
          <SignedIn>
            <Link to="/dashboard"  onClick={handleBooking}>
              <button>
                Book Now <MdNavigateNext color="next-icon" />
              </button>
            </Link>
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
