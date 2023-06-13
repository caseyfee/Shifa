import React from "react";
import { InlineWidget } from "react-calendly";

const Appointment = () => {
    return (
      <div className="App h-full py-40 container">
        <InlineWidget url="https://calendly.com/shifa-bootcamp" />
      </div>
    );
  };
  
export default Appointment;