import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ParkingOverview from "./ParkingOverview";
import ParkingSlot from "./ParkingSlot";
import ParkedVehicles from "./ParkedVehicles";

function App() {
  const [parkingSlots, setParkingSlots] = useState([
  { name: "A1", status: "Available", vehicleNumber: "" },
  { name: "A2", status: "Occupied", vehicleNumber: "MP07AB1234" },
  { name: "A3", status: "Available", vehicleNumber: "" },
  { name: "A4", status: "Available", vehicleNumber: "" },
  { name: "A5", status: "Occupied", vehicleNumber: "MP07CD5678" },
  { name: "A6", status: "Available", vehicleNumber: "" }
]);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [searchNumber, setSearchNumber] = useState("");

function handleSlotClick(slotName) {
  const selectedSlot = parkingSlots.find(
    (slot) => slot.name === slotName
  );

  const vehicleAlreadyParked = parkingSlots.some(
    (slot) =>
      slot.vehicleNumber.toUpperCase() === vehicleNumber.toUpperCase()
  );

  if (selectedSlot.status === "Available" && vehicleNumber.trim() === "") {
    setMessage("Please enter vehicle number!");
    setMessageType("error");
    return;
  }

  const vehiclePattern = /^[A-Z]{2}[0-9]{2}[A-Z]{1,3}[0-9]{4}$/;

  if (
    selectedSlot.status === "Available" &&
    !vehiclePattern.test(vehicleNumber)
  ) {
    setMessage("Invalid vehicle number!");
    setMessageType("error");
    return;
  }

  if (selectedSlot.status === "Available" && vehicleAlreadyParked) {
    setMessage("Vehicle is already parked!");
    setMessageType("error");
    return;
  }

  setMessage(
    selectedSlot.status === "Available"
      ? `Slot ${slotName} booked successfully!`
      : `Slot ${slotName} released successfully!`
  );
  setMessageType("success");

  setTimeout(() => {
  setMessage("");
}, 3000);

  setParkingSlots((slots) =>
  slots.map((slot) =>
    slot.name === slotName
      ? {
          ...slot,
          status:
            slot.status === "Available" ? "Occupied" : "Available",

          vehicleNumber:
            slot.status === "Available" ? vehicleNumber : ""
        }
      : slot
  )
);
setVehicleNumber("");
}

function handleSearch() {
  const foundSlot = parkingSlots.find(
    (slot) =>
      slot.vehicleNumber.toUpperCase() === searchNumber.toUpperCase()
  );

  if (foundSlot) {
    setMessage(`Vehicle is parked at slot ${foundSlot.name}`);
    setMessageType("success");
  } else {
    setMessage("Vehicle not found!");
    setMessageType("error");
  }

  setTimeout(() => {
    setMessage("");
  }, 3000);
}
  return (
  <div className="app-container">
    <Header />

    <main className="dashboard">
        <ParkingOverview parkingSlots={parkingSlots} />
        <ParkedVehicles parkingSlots={parkingSlots} />
        {message && (
  <div className={`message ${messageType}`}>
    {message}
  </div>
)}

<div className="vehicle-controls">
  <div className="vehicle-input">
    <label>Vehicle Number</label>

    <input
      type="text"
      placeholder="e.g. MP07AB1234"
      value={vehicleNumber}
      onChange={(e) =>
        setVehicleNumber(e.target.value.toUpperCase())
      }
    />
  </div>

  <div className="search-vehicle">
    <label>Find Vehicle</label>

    <div className="search-input-group">
      <input
        type="text"
        placeholder="Enter vehicle number"
        value={searchNumber}
        onChange={(e) =>
          setSearchNumber(e.target.value.toUpperCase())
        }
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  </div>
</div>
        <div className="parking-section">
  <div className="parking-section-header">
    <div>
      <h2>Parking Slots</h2>
      <p>Manage and monitor your parking spaces</p>
    </div>

    <div className="parking-legend">
      <span>
        <span className="legend-dot available-dot"></span>
        Available
      </span>

      <span>
        <span className="legend-dot occupied-dot"></span>
        Occupied
      </span>
    </div>
  </div>

  <div className="parking-grid">
            {parkingSlots.map((slot) => (
              <ParkingSlot
              key={slot.name}
              name={slot.name}
              status={slot.status}
              onClick={() => handleSlotClick(slot.name)}
              vehicleNumber={slot.vehicleNumber}
              />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;