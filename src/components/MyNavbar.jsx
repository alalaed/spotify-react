import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { BsPersonCircle, BsCaretDownFill } from "react-icons/bs";

const MyNavbar = () => {
  return (
    <div className="nav-wrapper-outter">
      <div className="nav-wrapper-inner pt-2">
        <div className="d-flex justify-content-between align-items-center  ">
          <div className="nav-left d-flex align-items-center">
            <div className="navbar-chevrons  ">
              <FaChevronCircleLeft />
              <FaChevronCircleRight />
            </div>
            <div className="nav-play-button ml-4  ">
              <div className="artist-main-play-button d-none ">
                <i className="bi bi-play-circle-fill"></i>
                <div className="artist-main-play-button-inner-div"></div>
              </div>
            </div>
            <div className="nav-text-toggling ml-4 d-none">Foo Fighters</div>
          </div>
          <div className="d-none d-md-block">
            <div className="navStyle d-flex align-items-center">
              <div className="pl-1">
                <BsPersonCircle style={{ height: "32px" }} />
              </div>
              <div id="username" className="ml-3"></div>
              <div className="ml-1 mr-2 mb-1">
                <BsCaretDownFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
