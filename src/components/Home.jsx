import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const different = [
    "drake",
    "linkin park",
    "metallica",
    "queen",
    "bruno mars",
    "2pac",
    "u2",
    "rihanna",
    "50-cent",
    "eminem",
    "future",
    "biggie",
  ];

  const getTheArtists = async () => {
    let arrayOfRandomArtists = [];

    const artists = (arrayOfRandomArtists) => {
      for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * different.length);
        arrayOfRandomArtists.push(different[random]);
      }
      return arrayOfRandomArtists;
    };
    artists(arrayOfRandomArtists);
    console.log(arrayOfRandomArtists);
    let songs = [];
    await Promise.all(
      arrayOfRandomArtists.map(async (element) => {
        let resp = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`
        );
        let artist = await resp.json();
        let x = Math.floor(Math.random() * 24);
        songs.push(artist.data[x]);
      })
    );
    // setting all our songs into the state ate once
    setArtistsObjects([...artistsObjects, ...songs]);
  };
  useEffect(() => getTheArtists(), []);

  const [artistsObjects, setArtistsObjects] = useState([]);

  return (
    <div>
      <Container fluid className="px-5" style={{ marginTop: "6em" }}>
        <Row>
          <h1 className="h1-main">Good morning</h1>
        </Row>
        <Row className=" ml-2">
          {artistsObjects.map((artist) => (
            <Col xs={12} md={6} lg={4} xl={3} key={artist.id}>
              <div className="mx-1 small-card-main d-flex align-items-center  my-2">
                <img
                  className="small-card-image-main"
                  src={artist.album.cover_small}
                  alt=""
                />
                <p class=" description-main"> {artist.title_short}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row id="main-section-small"></Row>
      </Container>

      <Container fluid className=" px-5 my-4">
        <Row className=" ml-2">
          <h2 className="h2-main">Recently played</h2>
        </Row>
        <Row id="main-section-recent">
          {artistsObjects.map((artist) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              xl={3}
              key={artist.id}
              className="mt-2"
              key={artist.id}
            >
              <div className="card-main pb-1">
                <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center">
                    <div className="imagewrapper">
                      <div className="son">
                        <img
                          className="px-3 py-3 card-image-main"
                          src={artist.album.cover_big}
                          alt=""
                        />
                      </div>
                      <div className="son2 d-flex justify-content-end align-items-end">
                        <div className="playbutton mb-3 mr-3">
                          <div className="arrow-right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="px-2 my-1 card-title">{artist.title_short}</h6>
                <p class="card-description-main my-2 px-2 ">
                  {artist.artist.name}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className=" px-5 my-4">
        <Row className=" ml-2">
          <h2 className="h2-main my-0">Shows to try</h2>
        </Row>
        <p className="ml-2 to-try-main text-left">
          Podcasts we think you will get hooked on.
        </p>
        <div id="main-section-to-try" className="row">
          {artistsObjects.map((artist) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              xl={3}
              key={artist.id}
              className="mt-2"
              key={artist.id}
            >
              <div className="card-main pb-1">
                <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center">
                    <div className="imagewrapper">
                      <div className="son">
                        <img
                          className="px-3 py-3 card-image-main"
                          src={artist.album.cover_big}
                          alt=""
                        />
                      </div>
                      <div className="son2 d-flex justify-content-end align-items-end">
                        <div className="playbutton mb-3 mr-3">
                          <div className="arrow-right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="px-2 my-1 card-title">{artist.title_short}</h6>
                <p class="card-description-main my-2 px-2 ">
                  {artist.artist.name}
                </p>
              </div>
            </Col>
          ))}
        </div>
      </Container>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Home;
