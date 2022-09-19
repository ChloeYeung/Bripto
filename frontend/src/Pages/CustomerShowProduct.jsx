// /customer/show_product

//bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//file
import CustomerNavbar from '../Components/CustomerNavbar';
import cusShowProCarousel1 from '../images/cusShowProCarousel1.jpg';
import cusShowProCarousel2 from '../images/cusShowProCarousel2.png';
import cusShowProCarousel3 from '../images/cusShowProCarousel3.png';

//react icon
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";



export default function CustomerShowProduct() {
  return (
    <div>

      {/* Customer Navbar */}
      <CustomerNavbar />


      {/* Carousel */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 cusShowProCarousel"
            src={cusShowProCarousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 cusShowProCarousel"
            src={cusShowProCarousel3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 cusShowProCarousel"
            src={cusShowProCarousel2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* Product card */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Product name</Card.Title>
          <Card.Text>
            Description:
            <br />
            Price:
          </Card.Text>
          <>
          </>
          <Button variant="primary">Add to cart <BsCartPlus /></Button>
          <Button variant="primary">Description <HiOutlineInformationCircle /></Button>
        </Card.Body>
      </Card>

    </div>
  )
}
