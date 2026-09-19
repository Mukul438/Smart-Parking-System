function ParkingSlot({ name, status, vehicleNumber, onClick }) {
  const isAvailable = status === "Available";

  return (
    <div className={`parking-slot ${status.toLowerCase()}`}>
      <div className="slot-header">
        <div className="slot-icon">🚘</div>

        <span className={`slot-status ${status.toLowerCase()}`}>
          <span className="status-indicator"></span>
          {status}
        </span>
      </div>

      <div className="slot-details">
        <h3>{name}</h3>

        <p className="slot-label">
          {isAvailable ? "Ready for parking" : "Currently parked"}
        </p>

        {!isAvailable && vehicleNumber && (
          <div className="vehicle-info">
            <span>Vehicle Number</span>
            <strong>{vehicleNumber}</strong>
          </div>
        )}
      </div>

      {isAvailable ? (
        <button className="slot-button book-button" onClick={onClick}>
          + Book Slot
        </button>
      ) : (
        <button
          className="slot-button release-button"
          onClick={() => {
            if (window.confirm("Are you sure you want to release this slot?")) {
              onClick();
            }
          }}
        >
          Release Slot
        </button>
      )}
    </div>
  );
}

export default ParkingSlot;