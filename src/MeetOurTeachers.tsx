import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import'slick-carousel/slick/slick-theme.css'
import './Stylesheets/slick.css'
import { Container,Card } from "react-bootstrap";
import teacher1 from './assets/teacher1-400x400.jpg'
import teacher2 from './assets/teacher2-400x400.jpg'
import teacher3 from './assets/teacher3-400x400.jpg'
import teacher4 from './assets/teacher4-400x400.jpg'
const MeetOurTeachers = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return(
        <>
            <Container id="OurTeachers">
            <div className="col-12 col-lg-6 mt-4 mb-3">
                <h2 className="main-sect mbr-section-title mbr-fonts-style display-2"><strong>Meet Our Teachers</strong></h2>
            </div>
                <Slider {...settings}>
                    <div className="p-1">
                        <Card style={{ width: '18rem' }} className="p-3 bg-secondary">
                            <Card.Img variant="top" src={teacher1} className="rounded-circle" />
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text className="text-center">
                                Some quick
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="p-1">
                        <Card style={{ width: '18rem' }} className="p-3 bg-secondary">
                            <Card.Img variant="top" src={teacher4} className="rounded-circle" />
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text className="text-center">
                                Some quick
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="p-1">
                        <Card style={{ width: '18rem' }} className=" bg-secondary">
                            <Card.Img variant="top" src={teacher2} className="rounded-circle" />
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text className="text-center">
                                Some quick
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="p-1">
                        <Card style={{ width: '18rem' }} className="p-3 bg-secondary">
                            <Card.Img variant="top" src={teacher3} className="rounded-circle" />
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text className="text-center">
                                Some quick
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Container>
        </>
    )
}
export default MeetOurTeachers;