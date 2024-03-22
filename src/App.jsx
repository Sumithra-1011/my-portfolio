import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidenavbar from "./sidenavbar/sidenavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <Container>
        <Row>
          <BrowserRouter>
            <Sidenavbar></Sidenavbar>
          </BrowserRouter>
        </Row>
      </Container>
    </>
  );
}

export default App;
