import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col className='table1'>
        <table>
            <tr>
                <th className='number' data-aos="fade-up">01</th>
                <th className='text' data-aos="fade-up">
                Select Your Date and Time</th>
            </tr>
            <tr className='texts' data-aos="fade-up">
                <th></th>
                <th className='texts' data-aos="fade-up">Check our availability calendar and select the date and time that works best for you. Tours are offered daily with multiple time slots to accommodate your schedule.</th>
            </tr>
            </table>
            </Col>
        <Col className='table1'>
        <table>
            <tr>
                <th className='number' data-aos="fade-up">02</th>
                <th className='text' data-aos="fade-up">
                
Reserve Your Spot</th>
            </tr>
            <tr className='texts' data-aos="fade-up">
                <th></th>
                <th className='texts' data-aos="fade-up">Once you’ve selected your desired tour and date, click the “Book Now” button to reserve your spot. For private tours or special requests, please contact our customer service directly.

</th>
            </tr>
            </table></Col>
      </Row>
      <Row>
      <Col className='table1' data-aos="fade-up">
        <table>
            <tr>
                <th className='number' data-aos="fade-up">03</th>
                <th className='text' data-aos="fade-up">
                
Make Payment</th>
            </tr>
            <tr className='texts' data-aos="fade-up">
                <th></th>
                <th className='texts' data-aos="fade-up">Secure your booking by making an online payment through our secure payment gateway. We accept major credit cards and other payment methods. For alternative payment options, please contact our customer service.</th>
            </tr>
            </table>
            </Col>
            <Col className='table1'>
        <table>
            <tr>
                <th className='number' data-aos="fade-up">04</th>
                <th className='text' data-aos="fade-up">
                
Receive Confirmation</th>
            </tr>
            <tr className='texts'>
                <th></th>
                <th className='texts' data-aos="fade-up">After payment, you will receive a confirmation email with your booking details, including the date, time, meeting location, and any additional instructions. Please keep this email for your records.</th>
            </tr>
            </table>
            </Col>
      </Row>
      <Row>
        <Col>
        <table>
            <tr className='text'>
                <th></th>
                <th></th>
            </tr>
            <tr data-aos="fade-down" className='texts'>
                <th></th>
                <th><a><button className='bb'>BOOK YOUR TOUR</button></a></th>
            </tr>
            </table>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;