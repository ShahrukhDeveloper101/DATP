import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './Popup.module.css';

const Popup = ({ isOpen, onClose, availabilityStartItem, availabilityEndItem }) => {
  console.log(typeof(availabilityEndItem));
  
  const availabilityStart = 9;
  const availabilityEnd = 21;
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const timeSelectRef = useRef(null);

  const getNextQuarterHour = () => {
    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15);
    now.setSeconds(0);
    return now;
  };

  const generateTimeSlots = (date) => {
    const slots = [];
    let start, end;

    // Set start and end times for the time slots
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
      start = getNextQuarterHour(); // Start from the next available quarter hour if it's today
    } else {
      start = new Date(date);
      start.setHours(availabilityStart); // Set start time to 9 AM for future dates
    }
    
    end = new Date(date);
    end.setHours(availabilityEnd); // Set end time to 9 PM

    if (start >= end) {
      console.error("Start time is after end time.");
      return;
    }

    // Generate time slots from start to end in 15-minute intervals
    while (start < end) {
      slots.push(new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      start.setMinutes(start.getMinutes() + 15); // Increase by 15 minutes
    }

    setTimeSlots(slots);
  };

  useEffect(() => {
    if (selectedDate) {
      generateTimeSlots(selectedDate);

      // Simulate a click on the time select to open the dropdown
      setTimeout(() => {
        if (timeSelectRef.current) {
          timeSelectRef.current.focus();
          timeSelectRef.current.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
        }
      }, 0);
    }
  }, [selectedDate]);

  const handleBooking = () => {
    alert(`Appointment booked on ${selectedDate?.toLocaleDateString()} at ${selectedTime}`);
    onClose(); // Close the popup after booking
  };

  return (
    isOpen ? (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
          <h2 className={styles.popupTitle}>Book Appointment</h2>
          
          <div className={styles.selectionContainer}>
            <div className={styles.datePickerContainer}>
              <label className={styles.label}>Select Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setSelectedTime('');
                }}
                minDate={new Date()}
                inline
                dateFormat="dd/MM/yyyy"
                className={styles.customDatePicker}
              />
            </div>

            <div className={styles.timePickerContainer}>
              <label className={styles.label}>Select Time:</label>
              <select
                ref={timeSelectRef}
                className={`${styles.customSelect}`}
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                disabled={!selectedDate}
              >
                <option value="" disabled>Select a time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={onClose} className={`${styles.popupCloseButton} mx-2`}>Close</button>
            <button 
              onClick={handleBooking} 
              className={`${styles.popupButton} mx-2`}
              disabled={!selectedDate || !selectedTime}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Popup;
