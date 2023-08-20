import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.navBg}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> */}
            </ul>
            {/* <button className="btn btn-primary" onClick={props.func}>change</button> */}

            <div class={`form-check text-${
                props.navBg === "light" ? "black" : "light"
              }`}>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadio"
                id="flexRadioDefault"
                value="default"
                checked={props.selectedColor === 'default'}
                onChange={props.handleColorChange}
                disabled={props.disable}
              />
              <label class="form-check-label" for="flexRadioDefault">
                Default
              </label>
            </div>
            <div
              class={`form-check mx-2 text-${
                props.navBg === "light" ? "black" : "light"
              }`}
            >
              <input
                class="form-check-input"
                type="radio"
                name="flexRadio"
                id="flexRadioBlue"
                value="blue"
                checked={props.selectedColor === 'blue'}
                onChange={props.handleColorChange}
                disabled={props.disable}
              />
              <label class="form-check-label" for="flexRadioBlue">
                Blue
              </label>
            </div>
            <div
              class={`form-check text-${
                props.navBg === "light" ? "black" : "light"
              }`}
            >
              <input
                class="form-check-input"
                type="radio"
                name="flexRadio"
                id="flexRadioBlack"
                value="black"
                checked={props.selectedColor === 'black'}
                onChange={props.handleColorChange}
                disabled={props.disable}
              />
              <label class="form-check-label" for="flexRadioBlack">
                Dark
              </label>
            </div>
            <div
              class={`form-check mx-2 text-${
                props.navBg === "light" ? "black" : "light"
              }`}
            >
              <input
                class="form-check-input"
                type="radio"
                name="flexRadio"
                id="flexRadioGreen"
                value="green"
                checked={props.selectedColor === 'green'}
                onChange={props.handleColorChange}
                disabled={props.disable}
              />
              <label class="form-check-label" for="flexRadioGreen">
                Green
              </label>
            </div>

            <div
              className={`form-check form-switch text-${
                props.navBg === "light" ? "black" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

//Default values of the props
Navbar.defaultProps = {
  title: "Title Here",
  aboutText: "About us",
};
