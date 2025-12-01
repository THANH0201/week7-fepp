import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentUser = localStorage.getItem("user");
  const isAuth = !!currentUser;
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigation("/");
    
  }
  return (
    <nav className="navbar">
      <h1>Job Search</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/add-job">Add Job</a>
        {!isAuth && (
          <>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/login'}>Login</Link>
          </>
        )}
        {isAuth && (
          <>
          <a>
            Welcome
          </a>
          <a onClick={handleLogout}>Logout</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;