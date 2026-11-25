import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Editorial from './components/Editorial';
import Title from './components/Title.jsx';
import About from './components/About.jsx';


function App() {

  return (
    <Container fluid className="container">
      <Title />
      <Row className="contact"> <Col><a href="mailto:audreysoler64@gmail.com">boopington@outlook.com</a></Col> </Row>

      <Routes>
        <Route
          path="/"
          element={
            <Editorial/>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;