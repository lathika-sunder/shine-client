import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import viteLogo from "/vite.svg";
import "./App.css";
import Homecomp from "./components/HomeComp/Homecomp";
import { ClerkProvider, SignedIn } from "@clerk/clerk-react";
import OrderBookingPage from "./pages/OrderBookingPage/OrderBookingPage";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const queryClient = new QueryClient();
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homecomp />} />
            <Route exact path="/order" element={<OrderBookingPage />} />

            <Route exact path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
