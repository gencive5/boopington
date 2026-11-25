import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Editorial from './components/Editorial';
import Title from './components/Title.jsx';
import About from './components/About.jsx';
import Toggle from './Toggle.jsx';


function App() {

  return (
    <Container fluid className="container">
      <Toggle/>
      {/* <Title /> */}
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