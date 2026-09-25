const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Todo List</h2>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search todos..."
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;