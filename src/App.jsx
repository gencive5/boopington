import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Editorial from './components/Editorial';
import Toggle from './Toggle.jsx';
import Modal from './components/Modal.jsx';


function App() {

  return (
    <Container fluid className="container">

      <Toggle/>
      <Modal/>
      <p className='slide-txt'> scroll </p>
      <Row className="contact"> <Col><a href="mailto:boopington@outlook.com">boopington@outlook.com</a></Col> </Row>
      <Editorial/>

    </Container>
  );
}

export default App;