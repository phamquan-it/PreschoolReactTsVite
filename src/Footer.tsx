import { Container } from 'react-bootstrap';
import oneicons from './assets/1-icons.svg';
const Footer = ()=>{
    return(
        <Container id='aboutUs'>
        <div className="wrapper p-3 py-5 p-lg-5 bg-secondary mb-3">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                    <div className="d-flex align-items-center">
                        <img src={oneicons} alt="" className="img" style={{height:"20px"}}/>
                        <p className="mbr-text mbr-fonts-style mt-4">
                            Preschool
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <p className="mbr-text mbr-fonts-style r display-7">
                        Quisque imperdiet mauris quis dui laoreet.
                    </p>
                </div>
            </div>
        </div>
        </Container>
    )
}
export default Footer;