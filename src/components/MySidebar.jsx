import {
  BsSpotify,
  BsFillHouseDoorFill,
  BsSearch,
  BsCollectionPlay,
  BsPlusSquareFill,
} from "react-icons/bs";
import like from "../assets/liked-icon.png";

const MySidebar = () => {
  return (
    <div className="sidebar-bg sticky-top">
      <div className="sidebar-logo">
        <span>
          <BsSpotify />
        </span>
        <span className="ml-2 sidebar-logo-text">Spotify</span>
      </div>
      <div class="sidebar-top mt-3">
        <div style={{ color: "rgb(172, 170, 170)", cursor: "pointer" }}>
          <div class="search-item-a">
            <span>
              <BsFillHouseDoorFill />
            </span>
            <span style={{ marginLeft: "15px" }}>Home</span>
          </div>
        </div>
        <div style={{ color: "rgb(172, 170, 170)", cursor: "pointer" }}>
          <div class="search-item-a">
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
        <div class="sidebar-divider"></div>
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
    </div>
  );
};

export default MySidebar;
