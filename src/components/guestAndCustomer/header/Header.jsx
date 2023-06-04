import { NavLink, useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { RxTriangleDown } from "react-icons/rx";
import { logo1 } from "../../../utils/constants";
import "./Header.scss";
import { useState } from "react";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

const Header = () => {
  const navigate = useNavigate();

  const [showSignInForm, setShowSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
      {showSignInForm && <SignIn toggleSignInForm={toggleSignInForm} />}
      {showSignUpForm && <SignUp />}
      <div className="header-container">
        <div style={{ paddingLeft: "2%", width: "25%" }}>
          <NavLink to="/" end className="nav-logo">
            <div className="logo-container">
              <div className="logo-image">
                <img src={logo1} alt="page logo" />
              </div>
              <div className="logo-text">
                <p>BIRD</p>
                <p>TRADING</p>
                <p>CENTER</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="nav-container">
          <ul className="nav">
            <li>
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <Link
                to="service"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => navigate("/")}
              >
                Services
                <RxTriangleDown />
              </Link>
              <ul className="subnav">
                <li>
                  <NavLink to="/workshop" className="nav-link">
                    Workshop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/private-consultant" className="nav-link">
                    Private Consultant
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/course-online" className="nav-link">
                    Course Online
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bird-course" className="nav-link">
                    Bird Course
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="button-container">
          <button className="signup-button" onClick={toggleSignUpForm}>
            Sign Up
          </button>
          <button className="signin-button" onClick={toggleSignInForm}>
            <p>Log In</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
