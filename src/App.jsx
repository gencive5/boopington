import { useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Editorial from './components/Editorial';
import Title from './components/Title.jsx';
import About from './components/About.jsx';


function App() {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = useCallback(() => setFullScreen(p => !p), []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <Container fluid className={`container ${fullScreen ? 'fullscreen-mode' : ''}`}>
      <Title />
      <Row className="contact-commercial"> <Col><a href="mailto:audreysoler64@gmail.com">boopington@outlook.com</a></Col> </Row>

      <Routes>
        <Route
          path="/"
          element={
            <Editorial
              fullScreen={fullScreen}
              toggleFullScreen={toggleFullScreen}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;