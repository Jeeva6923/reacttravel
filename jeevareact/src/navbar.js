import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import grandtour from './images/grandtour.png'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

function BasicExample() {
  return (
    
    <Navbar data-aos="fade-down" expand="lg" className="bg" class="container-fluid">
      <Container>
        <Navbar.Brand href="#home"><a><img src={grandtour}></img></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="tel:+918056707090" id='call'><IoPhonePortraitSharp />CALL</Nav.Link>
            <Nav.Link href="https://api.whatsapp.com/send?phone=918056707090&text=Iam wishing to book an Grandtour" id='mess'><TiMessage />MESSAGE</Nav.Link>
            {/* whatsapp://send?abid=phonenumber&text=Grandtour! */}
            <Nav.Link href="https://wa.me/+918056707090/?text=Hello iam wishing to book an Grandtour" id='what'><FaWhatsapp />WHATSAPP</Nav.Link>
            <a href='/booktour'><button className='btn'>BOOK YOUR TOUR</button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

/* <div className='journey'>
      <span>A JOURNEY </span>
</div>


<div className='through'>
<span>Through Wine</span>

</div>


<div className='country'>
<span>Country Hills
</span>
</div>

<div className='winery'>
<span>Winery Excursion</span>
</div>  */
    
  );
}

export default BasicExample;