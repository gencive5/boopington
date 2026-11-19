import { Col } from 'react-bootstrap';
import a1 from '../assets/images/c1.JPG';
import { useLocation, Link } from 'react-router-dom';

function About () {

  const location = useLocation();
  return (

    <div>
    <Col>
    <p className= "about-text">
I'm a photographer based in Talence.
<br/>
<br/>
I'm open for collaborations.
    </p>
    <div className="carousel2">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-item-wrapper">
                <img className="carousel-bg-img" src={a1} alt="" />
              </div>
            </div>
          </div>
    </div>
    </Col>

    <Link to="/" className="menu-items">Gallery</Link>
   
    </div>
    
  );
}

export default About;