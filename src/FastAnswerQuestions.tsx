import { Container} from "react-bootstrap";
import QuestionAndAnswer from "./QuestionAndAnswer";
const FastAnswerQuestions= ()=>{
    const data =  [
        {
            Question:"Can I pay the Registration Fee Online?",
            Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ultricies eleifend. Donec fermentum tellus dignissim tortor bibendum, nec auctor leo euismod. Nam fermentum sapien quis finibus suscipit. Sed urna tortor, ornare nec sem sed, bibendum sodales mauris. Phasellus aliquet mi eget libero fringilla convallis. Pellentesque ultrices massa ligula, a dapibus massa euismod at. Donec mollis turpis magna, quis vehicula arcu suscipit sit amet. Cras interdum enim eget neque laoreet finibus. Aliquam tincidunt, nibh sed maximus dignissim, odio arcu euismod massa, vel fermentum ligula ipsum in risus. Duis semper cursus libero ac sollicitudin. Fusce sed dictum metus. Cras sagittis vulputate placerat. Donec ac viverra mauris, vitae porta mauris. Morbi venenatis venenatis dolor eget sodales. Nullam sit amet ligula pretium, suscipit sem non, mollis erat."
        },
        {
            Question:"Do I have to complete an Application form for each child?",
            Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ultricies eleifend. Donec fermentum tellus dignissim tortor bibendum, nec auctor leo euismod. Nam fermentum sapien quis finibus suscipit. Sed urna tortor, ornare nec sem sed, bibendum sodales mauris. Phasellus aliquet mi eget libero fringilla convallis. Pellentesque ultrices massa ligula, a dapibus massa euismod at. Donec mollis turpis magna, quis vehicula arcu suscipit sit amet. Cras interdum enim eget neque laoreet finibus. Aliquam tincidunt, nibh sed maximus dignissim, odio arcu euismod massa, vel fermentum ligula ipsum in risus. Duis semper cursus libero ac sollicitudin. Fusce sed dictum metus. Cras sagittis vulputate placerat. Donec ac viverra mauris, vitae porta mauris. Morbi venenatis venenatis dolor eget sodales. Nullam sit amet ligula pretium, suscipit sem non, mollis erat."
        },
        {
            Question:"Can I contact the Admissions Office if I have any questions?",
            Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ultricies eleifend. Donec fermentum tellus dignissim tortor bibendum, nec auctor leo euismod. Nam fermentum sapien quis finibus suscipit. Sed urna tortor, ornare nec sem sed, bibendum sodales mauris. Phasellus aliquet mi eget libero fringilla convallis. Pellentesque ultrices massa ligula, a dapibus massa euismod at. Donec mollis turpis magna, quis vehicula arcu suscipit sit amet. Cras interdum enim eget neque laoreet finibus. Aliquam tincidunt, nibh sed maximus dignissim, odio arcu euismod massa, vel fermentum ligula ipsum in risus. Duis semper cursus libero ac sollicitudin. Fusce sed dictum metus. Cras sagittis vulputate placerat. Donec ac viverra mauris, vitae porta mauris. Morbi venenatis venenatis dolor eget sodales. Nullam sit amet ligula pretium, suscipit sem non, mollis erat."
        },
    ]
    return(
        <>
            <Container id="faq-expand">
                <div className="wrapper p-3 py-5 p-lg-5">
                    <div className="row mb-4">
                        <div className="col-12 mb-3 title-section">
                            <h3 className="mbr-section-title mbr-fonts-style display-2 text-center">
                                <strong>Fast Answer Questions</strong>
                            </h3>
                        </div>
                    </div>
                    {data.map((item)=>(
                        <QuestionAndAnswer Question={item.Question} Answer={item.Answer}/>
                    ))}
                    
                </div>
            </Container>
        </>
    )
}

export default  FastAnswerQuestions;