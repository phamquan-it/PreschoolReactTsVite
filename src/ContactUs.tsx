import bg2_3 from './assets/bg2-3-1920x1280.jpg';
const ContactUs = ()=>{
    return(
        <>
            <section data-bs-version="5.1" className="form04 cid-sRQM30Kxw4 mbr-parallax-background" id="form04-a"
            style={{zIndex:0, position:"relative", backgroundImage:`url('${bg2_3}')`}}
            >   
                <div className="container">
                    <div className="row justify-content-between mt-5 p-5">
                        <div className="col-12 col-lg-6">
                            <h2 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                <strong>Enroll Now!</strong></h2>
                            <h3 className="mbr-section-subtitle mbr-fonts-style display-5">
                                <strong>Entry Requirements</strong>
                            </h3>
                            <p className="mbr-text text1 mbr-fonts-style mt-4 display-7">
                                Proin felis ligula, consectetur in lorem blandit, tristique dictum elit. Curabitur hendrerit
                                libero nunc, ut luctus eros lacinia vel. Proin in purus sagittis, tempus dui in, tristique
                                sapien. Nullam et ipsum velit.
                            </p>
                            <div className="mt-4">
                                <h4 className="mbr-section-title title1 mbr-fonts-style display-5">
                                    <strong>Special Education Services</strong>
                                </h4>
                                <p className="mbr-text text2 mbr-fonts-style mt-2 display-7">
                                    Maecenas dui tellus, aliquet vitae eros vitae, sodales gravida orci.
                                </p>
                            </div>
                        
                        </div>
                        <div className="col-12 col-lg-5 card p-5 mt-4 mt-lg-0">
                            <div className="mbr-form">
                                <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler">
                                    <div className="row">
                                        
                                        <div hidden data-form-alert-danger="" className="alert alert-danger col-12">
                                            Oops...! some problem!
                                        </div>
                                    </div>
                                    <div className="dragArea row justify-content-center">
                                        <div className="col-12 mb-4">
                                            <h2 className="mbr-section-title mbr-fonts-style display-2"><strong>Contact Us</strong></h2>
                                        </div>
                                        <div className="col-12 form-group mb-4" data-for="Full Name">
                                            <input type="text" name="Name" placeholder="Full Name" data-form-field="Name" autoComplete='1' required className="form-control display-7" id="Name-form04-a"/>
                                        </div>
                                        <div data-for="Phone" className="col-12 form-group mb-4">
                                            <input type="tel" name="Phone" placeholder="Phone" data-form-field="Phone" autoComplete="1" className="form-control display-7" required id="Phone-form04-a"/>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <p className="mbr-text mbr-fonts-style display-4" style={{fontSize:"18px"}}>
                                                Donec fermentum at leo quis efficitur. Morbi sagittis lorem id sapien euismod,
                                                eget venenatis quam scelerisque.
                                            </p>
                                        </div>
                                        <div className="col-12 mbr-section-btn"><button type="submit" className="btn btn-primary justify-content-center display-7">
                                                SEND
                                            </button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs;