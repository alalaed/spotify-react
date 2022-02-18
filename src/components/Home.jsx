import { Container, Row } from "react-bootstrap";

const Home = () => {
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
