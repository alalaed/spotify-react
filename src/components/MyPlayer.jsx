import { Container, Row, col, Col } from "react-bootstrap";
import tile1 from "../assets/tile1.jpg";
import {
  BsHeart,
  BsPip,
  BsShuffle,
  BsFillSkipStartFill,
  BsFillPlayCircleFill,
  BsFillSkipEndFill,
  BsArrowRepeat,
  BsListUl,
  BsMusicPlayer,
  BsFillVolumeUpFill,
} from "react-icons/bs";

const MyPlayer = () => {
  return (
    <div>
      <footer className="fixed-bottom footer-class">
        <Container fluid>
          <Row>
            <Col className="col-md-3 d-flex flex-nowrap justify-content-center justify-content-md-between">
              <img
                src={tile1}
                alt=""
                className="align-self-center footer-tile mr-2"
              />

              <div className="align-self-center mr-md-auto">
                <p
                  className="mb-0 footer-song-text"
                  style={{ fontSize: "small" }}
                >
                  Everlong
                </p>
                <span className="lead" style={{ fontSize: "x-small" }}>
                  Foo Fighters
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <BsHeart className="ml-3" />
                <BsPip className="ml-3" />
              </div>
            </Col>
            <Col md={6} className="px-5">
              <div className="d-flex justify-content-center align-items-center w-100">
                <BsShuffle className="d-inline-block mx-2 " />
                <BsFillSkipStartFill className="d-inline-block mx-2 " />
                <div className="footer-play-button-wrapper">
                  <BsFillPlayCircleFill className="d-inline-block footer-play-button-bigger mx-2" />
                </div>
                <BsFillSkipEndFill className="d-inline-block mx-2" />
                <BsArrowRepeat d-inline-block mx-2 />
              </div>
              <div className="d-flex align-items-center justify-content-center mb-3 mt-n1">
                <span className="mr-n4" style={{ fontSize: "x-small" }}>
                  3.34
                </span>
                <div style={{ width: "80%" }}>
                  <hr
                    className=" align-self-start mb-auto mt-auto"
                    style={{
                      height: " 3px",
                      width: "80%",
                      backgroundColor: "grey",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <span className="ml-n4" style={{ fontSize: "x-small" }}>
                  3.34
                </span>
              </div>
            </Col>
            <Col md={2} className="d-none d-lg-block ">
              <div className="d-flex flex-nowrap justify-content-between align-items-center d-inline-block mt-3">
                <BsListUl />
                <BsMusicPlayer className="px-2" />
                <BsFillVolumeUpFill className="pl-2" />
                <hr
                  style={{
                    height: "3px",
                    width: "60%",
                    backgroundColor: "grey",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default MyPlayer;
