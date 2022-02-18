import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

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
    await Promise.all(
      arrayOfRandomArtists.map(async (element) => {
        let resp = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`
        );
        let artist = await resp.json();
        setArtistsObjects([...artistsObjects, artist.data[0]]);
      })
    );
  };
  useEffect(() => getTheArtists(), []);

  const [artistsObjects, setArtistsObjects] = useState([]);

  return (
    <div>
      <Container fluid className="px-5" style={{ marginTop: "6em" }}>
        <Row className=" ml-2">
          <h1 className="h1-main">Good morning</h1>
        </Row>

        <Row id="main-section-small"></Row>
      </Container>

      <Container fluid className=" px-5 my-4">
        <Row className="row ml-2">
          <h2 className="h2-main">Recently played</h2>
        </Row>
        <Row id="main-section-recent"></Row>
      </Container>

      <Container fluid className=" px-5 my-4">
        <Row className=" ml-2">
          <h2 className="h2-main my-0">Shows to try</h2>
        </Row>
        <p className="ml-2 to-try-main text-left">
          Podcasts we think you will get hooked on.
        </p>
        <div id="main-section-to-try" className="row"></div>
      </Container>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Home;
