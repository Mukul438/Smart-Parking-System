function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="header-icon">🅿</div>

        <div className="header-title">
          <h1>ParkEase</h1>
          <p>Smart Parking Management</p>
        </div>
      </div>

      <div className="header-right">
        <span className="system-status">
          <span className="status-dot"></span>
          System Online
        </span>
      </div>
    </header>
  );
}

export default Header;