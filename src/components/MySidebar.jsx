import {
  BsSpotify,
  BsFillHouseDoorFill,
  BsSearch,
  BsCollectionPlay,
  BsPlusSquareFill,
  BsPeople,
} from "react-icons/bs";
import like from "../assets/liked-icon.png";

const MySidebar = () => {
  return (
    <div className="sidebar-bg sticky-top px-2">
      <div className="sidebar-logo px-3">
        <span>
          <BsSpotify />
        </span>
        <span className="ml-2 sidebar-logo-text">Spotify</span>
      </div>
      <div className="sidebar-top mt-3">
        <div style={{ color: "rgb(172, 170, 170)", cursor: "pointer" }}>
          <div className="search-item-a">
            <span>
              <BsFillHouseDoorFill />
            </span>
            <span style={{ marginLeft: "15px" }}>Home</span>
          </div>
        </div>
        <div style={{ color: "rgb(172, 170, 170)", cursor: "pointer" }}>
          <div className="search-item-a">
            <span>
              <BsSearch />
            </span>
            <span style={{ marginLeft: "15px" }}>Search</span>
          </div>
        </div>
        <div className="search-item-a">
          <div>
            <span>
              <BsCollectionPlay />
            </span>
            <span style={{ marginLeft: "15px" }}>Your library</span>
          </div>
        </div>
        <div className="sidebar-divider"></div>
        <div className="search-item-a">
          <div>
            <span>
              <BsPlusSquareFill />
            </span>
            <span style={{ marginLeft: "15px" }}>Create Playlist</span>
          </div>
        </div>
        <div className="search-item-a">
          <div>
            <span>
              <img src={like} alt="" />
            </span>
            <span style={{ marginLeft: "15px" }}>Liked Songs</span>
          </div>
        </div>
      </div>
      <div className="sidebar-line-divider ">
        <hr className="my-2" />
      </div>
      <div className="sidebar-bottom mt-2">
        <div className="sidebar-bottom-content">
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>
            June19
            <span className="float-right">
              <BsPeople />
            </span>
          </div>
          <div>
            Party
            <span className="float-right">
              <BsPeople />
            </span>
          </div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
        </div>

        <div className="sidebar-instal my-3">
          <span>
            <i className="bi bi-arrow-down-circle"></i>
          </span>
          <span className="ml-2">Install App</span>
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
