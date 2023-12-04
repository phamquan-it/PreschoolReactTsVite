import { useState } from "react";
import { Row,Col,Collapse } from "react-bootstrap";
const QuestionAndAnswer = (props:any)=>{
    const [open, setOpen] = useState(false)
    return(
        <Row className="shadow p-3 pt-4 pb-4 mt-3" style={{borderRadius:"10px"}}
            onClick={()=>{ setOpen(!open) }}
            aria-controls="example-collapse-text"
            aria-aria-expanded={open}>
            <Col xs sm="12" className="d-flex">
                <div className="me-auto">{props.Question}</div>
                <div>+</div>
            </Col>
            <Collapse in={open} className="mt-3">
                <div id="example-collapse-text">
                {props.Answer}
                </div>
            </Collapse>
        </Row>
    )
}
export default QuestionAndAnswer;
