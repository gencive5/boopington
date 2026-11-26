import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Catrousel from './components/Catrousel.jsx';
import Toggle from './components/Toggle.jsx';
import About from './components/About.jsx';


function App() {

  return (
    <Container fluid className="container">

      <Toggle/>
      <About/>
      <p className='scroll-txt'> scroll </p>
      <Row className="contact"> <Col><a href="mailto:boopington@outlook.com">boopington@outlook.com</a></Col> </Row>
      <Catrousel/>

    </Container>
  );
}

export default App;