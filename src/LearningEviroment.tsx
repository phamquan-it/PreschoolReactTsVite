import './Stylesheets/LearningEnviroment.css'
import purple from './assets/purple.svg'
import cyan from './assets/cyan.svg'
import orange from './assets/orange.svg'
import { Container } from 'react-bootstrap'
const LearningEnviroment = ()=>{
    return(
        <>
            <Container className='shadow-lg wrapper' id='cources'>
                <div className="wrapper mt-5 p-5">
                    <div className="row justify-content-center justify-content-lg-between">
                        <div className="col-12 col-md-5">
                            <h2 className="mbr-section-title mbr-fonts-style mb-3 display-2" style={{wordBreak:"break-word"}}>
                                <strong>Unique Learning</strong>
                            <div><strong>Environment</strong></div></h2>
                        </div>
                        <div className="col-12 col-md-5">
                            
                            
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4" id='ule'>
                        <div className="col-12 col-md-5 col-lg-4 cid-sRQJtw4eqY">
                            <div className="card card-1">
                                <div className="card-body d-flex flex-column flex-lg-row p-3">
                                    <img src={purple} alt="" className="star mt-1 mb-4 mb-lg-0"/>
                                    <div className="card-content">
                                        <p className="card-text mbr-text mbr-fonts-style col-12 display-7">
                                            Eget amet facilisi pellentesque habitant maecenas.
                                        </p>
                                        <p className="card-text mbr-text mbr-fonts-style col-12 mt-3 display-5"><strong>Expert Teachers</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="card card-2" style={{backgroundColor:"#a8d657"}}>
                                <div className="card-body d-flex flex-column flex-lg-row">
                                    <img src={cyan} alt="" className="star mt-1 mb-4 mb-lg-0"/>
                                    <div className="card-content">
                                        <p className="card-text mbr-text mbr-fonts-style col-12 display-7">
                                            Nulla lacus mi, interdum nec nisl nec, vulputate egestas ligula.
                                        </p>
                                        <p className="card-text mbr-text mbr-fonts-style col-12 mt-3 display-5">
                                            <strong>
                                                Children Safety
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="card card-3" style={{backgroundColor:"#f5e74c"}}>
                                <div className="card-body d-flex flex-column flex-lg-row">
                                    <img src={orange} alt="" className="star mt-1 mb-4 mb-lg-0"/>
                                    <div className="card-content">
                                        <p className="card-text mbr-text mbr-fonts-style col-12 display-7">
                                            Aliquam vitae mi et augue pellentesque sodales non sit amet turpis.</p>
                                        <p className="card-text mbr-text mbr-fonts-style col-12 mt-3 display-5">
                                            <strong>
                                                Cute Environment
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default LearningEnviroment;