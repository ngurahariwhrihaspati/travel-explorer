import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div className="booking-calendar">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={
          selectedDate
            ? `Selected: ${selectedDate.toLocaleDateString()}`
            : "Pick a day."
        }
      />
    </div>
  );
}

export default BookingCalendar;
