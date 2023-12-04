import { Container } from 'react-bootstrap';
import green from './assets/green.svg';
import cyan from './assets/cyan.svg';
import purple from './assets/purple.svg';
import bg3 from './assets/bg3-1920x1380.jpg'
const Steps = ()=>{
    return(
        <div className="mt-5 pt-5 pb-5" style={{background:`url('${bg3}')`}}>
            <Container>
                <span className='display-2 fw-bold'>
                Three easy stepsto successful future
                </span>
                
                    <div className='row justify-content-center'>
                        <div className="col-12 col-lg-4">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="mb-3 d-flex align-items-center">
                                    <img src={green} alt="" className="star"/>
                                    <h4 className="card-title mbr-section-subtitle mbr-fonts-style m-0 display-5">
                                        <strong>Basic</strong>
                                    </h4>
                                </div>
                                <p className="mbr-text text1 mbr-fonts-style mb-4 display-7">
                                    Morbi gravida lectus in vehicula placerat. Phasellus eget magna leo. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a euismod
                                    velit.
                                </p>
                                
                                <div className="mbr-section-btn mb-3"><a className="btn btn-primary justify-content-center display-4" href="index.html#form04-a">
                                        ENROLL CHILD
                                    </a></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="mb-3 d-flex align-items-center">
                                        <img src={cyan} alt="" className="star"/>
                                        <h4 className="card-title mbr-section-subtitle mbr-fonts-style m-0 display-5">
                                            <strong>Basic</strong>
                                        </h4>
                                    </div>
                                    <p className="mbr-text text1 mbr-fonts-style mb-4 display-7">
                                        Morbi gravida lectus in vehicula placerat. Phasellus eget magna leo. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a euismod
                                        velit.
                                    </p>
                                    
                                    <div className="mbr-section-btn mb-3"><a className="btn btn-primary justify-content-center display-4" href="index.html#form04-a">
                                            ENROLL CHILD
                                        </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="mb-3 d-flex align-items-center">
                                        <img src={purple} alt="" className="star"/>
                                        <h4 className="card-title mbr-section-subtitle mbr-fonts-style m-0 display-5">
                                            <strong>Basic</strong>
                                        </h4>
                                    </div>
                                    <p className="mbr-text text1 mbr-fonts-style mb-4 display-7">
                                        Morbi gravida lectus in vehicula placerat. Phasellus eget magna leo. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a euismod
                                        velit.
                                    </p>
                                    
                                    <div className="mbr-section-btn mb-3"><a className="btn btn-primary justify-content-center display-4" href="index.html#form04-a">
                                            ENROLL CHILD
                                        </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </Container>
            
        </div>
    )
}
export default Steps;