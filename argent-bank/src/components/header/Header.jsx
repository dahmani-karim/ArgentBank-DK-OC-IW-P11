// Header component

import Logo from "../../assets/logo/argentBankLogo.png"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cleanStore } from "../../redux/userSlice";

const Header = () => {
  const pseudo = useSelector(state => state.userSlice.userProfil.userName)
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(cleanStore(null));
  };

    return (
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {!localStorage.getItem('token') ? (
            <a className="main-nav-item" href="login">
              <i className="fa fa-user-circle"></i>
              <span> </span>
              Sign In
            </a>
          ) : (
            <div>
              <i className="fa fa-user-circle"></i>
              <span> </span>
              <a className="main-nav-item" href="user">{pseudo}</a>
              <span>- </span>
              <a className="main-nav-item" href="login" onClick={handleLogout}>Sign Out</a>
            </div>
          )}
        </div>
      </nav>
    );
};

export default Header;