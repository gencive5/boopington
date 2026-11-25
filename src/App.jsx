import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Editorial from './components/Editorial';
import About from './components/About.jsx';
import Toggle from './Toggle.jsx';
import Modal from './components/Modal.jsx';


function App() {

  return (
    <Container fluid className="container">
      <Toggle/>
      <Modal/>
      <p className='slide-txt'> scroll </p>
      <Row className="contact"> <Col><a href="mailto:boopington@outlook.com">boopington@outlook.com</a></Col> </Row>

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