function ParkingOverview({ parkingSlots }) {
  const totalSlots = parkingSlots.length;

  const availableSlots = parkingSlots.filter(
    (slot) => slot.status === "Available"
  ).length;

  const occupiedSlots = parkingSlots.filter(
    (slot) => slot.status === "Occupied"
  ).length;

  const occupancyRate =
    totalSlots === 0 ? 0 : Math.round((occupiedSlots / totalSlots) * 100);

  return (
    <section className="parking-overview">
      <div className="overview-heading">
        <div>
          <h2>Parking Overview</h2>
          <p>Real-time parking space status</p>
        </div>

        <span className="overview-badge">Live Overview</span>
      </div>

      <div className="overview-cards">
        <div className="overview-card total-card">
          <div className="card-top">
            <span className="card-icon">🅿</span>
            <span className="card-label">Total Slots</span>
          </div>
          <h3>{totalSlots}</h3>
          <p>Parking spaces</p>
        </div>

        <div className="overview-card available-card">
          <div className="card-top">
            <span className="card-icon">✓</span>
            <span className="card-label">Available</span>
          </div>
          <h3>{availableSlots}</h3>
          <p>Ready to book</p>
        </div>

        <div className="overview-card occupied-card">
          <div className="card-top">
            <span className="card-icon">🚗</span>
            <span className="card-label">Occupied</span>
          </div>
          <h3>{occupiedSlots}</h3>
          <p>Currently in use</p>
        </div>

        <div className="overview-card occupancy-card">
          <div className="card-top">
            <span className="card-icon">📊</span>
            <span className="card-label">Occupancy Rate</span>
          </div>
          <h3>{occupancyRate}%</h3>
          <div className="occupancy-progress">
            <div
              className="occupancy-progress-fill"
              style={{ width: `${occupancyRate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParkingOverview;