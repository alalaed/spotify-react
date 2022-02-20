import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Album = () => {
  const [album, setAlbum] = useState([]);
  const params = useParams();

  const getArtist = async () => {
    let resp = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + params.ID
    );
    let data = await resp.json();
    console.log(data);
  };
  return (
    <div>
      <Container fluid className=" my-2">
        <Row style={{ marginTop: "80px" }}>
          <Col xs={12} className="card-head d-flex my-2">
            <Col xs={2} className=" card-head-image"></Col>
            <Col
              xs={8}
              className=" d-flex description text-white justify-content-start align-items-end"
            >
              <div id="header" className="ml-3"></div>
            </Col>
          </Col>
          <div>
            <Row className=" text-white">
              <Col xs={12} className=" d-flex align-items-center">
                <div className="artist-main-play-button">
                  <i className="bi bi-play-circle d-inline-block mx-2"></i>
                  <div className="artist-main-button-inner-div"></div>
                </div>
                <div className="ml-4 px-3 py-1 artist-follow">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="ml-4">
                  <i className="bi bi-three-dots"></i>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        <div className="pt-2">
          <span className="pl-3 ash_tag">#</span>
          <span className="mx-2" style={{ color: "white;" }}>
            TITLE
          </span>
        </div>
        <hr
          className="my-2"
          style={{ backgroundColor: "rgb(204, 186, 186)", marginTop: "25px" }}
        />

        <div className="artist-songs-table-wrapper pr-3"></div>
      </Container>
    </div>
  );
};

export default Album;
