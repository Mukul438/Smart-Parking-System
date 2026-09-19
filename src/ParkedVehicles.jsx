function ParkedVehicles({ parkingSlots }) {
  const occupiedSlots = parkingSlots.filter(
    (slot) => slot.status === "Occupied" && slot.vehicleNumber
  );

  return (
    <section className="parked-vehicles">
      <div className="parked-heading">
        <div>
          <h2>Currently Parked Vehicles</h2>
          <p>Vehicles currently inside the parking area</p>
        </div>

        <span className="vehicle-count">
          {occupiedSlots.length} Vehicles
        </span>
      </div>

      {occupiedSlots.length === 0 ? (
        <div className="empty-vehicles">
          <span>🚘</span>
          <p>No vehicles are currently parked.</p>
        </div>
      ) : (
        <div className="parked-vehicles-grid">
          {occupiedSlots.map((slot) => (
            <div className="parked-vehicle-card" key={slot.name}>
              <div className="parked-car-icon">🚗</div>

              <div className="parked-car-details">
                <h3>{slot.vehicleNumber}</h3>
                <p>Vehicle Registration Number</p>

                <span className="parked-slot-badge">
                  Slot {slot.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ParkedVehicles;