import Carousel from 'react-bootstrap/Carousel';
import sixPeople from './assets/6-people.jpg';
import threePeople from './assets/3-people.jpg';
import eightPeople from './assets/8-people.jpg';
import fourPeople from './assets/4-people.jpg';
import onePeople from './assets/1-people.jpg';
import ninePeople from './assets/9-people.jpg';
import fivePeople from './assets/5-people.jpg';
import sevenPeople from './assets/7-people.jpg';
import { Container, Image } from 'react-bootstrap';

function OurPreschoolPhoto() {
  return (
    <Container style={{minWidth:"96%"}}>
      <h1 className='p-3 pt-5 text-center display-2 fw-bold'>Our Preschool Photo</h1>
       <Carousel className='ps-4 pe-4'>
      <Carousel.Item>
        <Image src={sixPeople} alt='six People'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={threePeople} alt='three People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={eightPeople} alt='eight People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={sevenPeople} alt='seven People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={fivePeople} alt='five People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ninePeople} alt='nine People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={onePeople} alt='one People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={fourPeople} alt='four People'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default OurPreschoolPhoto;