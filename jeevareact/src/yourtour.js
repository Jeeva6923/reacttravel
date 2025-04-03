import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yourw from './images/yourw.jpg'
import winey from './images/winey.jpg'

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row id='row2'>
        <Col sm={6} id='your'><h6 id='yourid1'>YOUR PERSONAL TOUR GUIDE</h6>
        <h2 id='yourid'>MEET </h2>
        <h2 id='yourid'>SCARLETT</h2>
        <p className='yourpara'>Join us for an unforgettable journey through the heart of our vineyard and winery, where tradition meets innovation. Our comprehensive winery tour offers a unique opportunity to experience the meticulous process of winemaking, from grape to glass.</p>

<p className='yourpara'>Stroll through our picturesque vineyard with an expert guide who will share insights about our grape varieties, sustainable farming practices, and the unique terroir that influences our wines.</p>

<p className='yourpara'>Immerse yourself in the art and science of winemaking and discover why our wines are celebrated worldwide. We look forward to welcoming you to our vineyard and sharing our passion for wine with you.</p>
        </Col>
        <Col sm={6} id='imge'><img src={yourw} id='imgw' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></img>
        <img src={winey} id='imgwine' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></img></Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;