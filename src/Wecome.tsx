import bgWecome from './assets/bg1-1-1920x1356.jpg';
import green from './assets/green.svg';
const Welcome = ()=>{
    return (
    <>
        <div className="p-3 py-5 p-lg-5" style={{background:`url('${bgWecome}') 100%`}}>
            <div className='p-5 m-5 mt-3 pt-0'>
            <div className="row align-items-center title-margin">
                <div className="content-container col-12 col-lg-7">
                    <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1"
                        style={{fontWeight:"bold"}}>
                        <strong>Welcome to Preschool</strong><strong><br/></strong></h1>
                </div>
                <div className="img-container col-12 col-lg-5 justify-content-center d-flex">
                    <div className="card">
                        <div className="card-body d-flex">
                            <img src={green} style={{width:"32px"}} alt="" className="me-1"/>
                            <p className="card-text mbr-text mbr-fonts-style display-5"  style={{
                                fontSize:"18px",fontWeight:"bold"
                            }}>
                                <strong>Welcoming Place </strong><br/>
                                <strong>For Every Child&nbsp;</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mbr-section-btn col-12 col-lg-8 text-start mt-5">
                    <a className="justify-content-center btn btn-white display-4 btn-primary me-2" href="index.html#list01-9"
                    id='btn-learnmore'>
                        Learn More</a>
                    <a className="justify-content-center btn btn-primary display-4" href="index.html#features14-3">
                        Let's go!
                    </a>
                </div>
            </div>
            </div>
            
        </div>
    </>
    )
}
export default Welcome;