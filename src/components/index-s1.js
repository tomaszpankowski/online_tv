import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Card from "../../node_modules/react-bootstrap/Card";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ContactData extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className="d-flex minh-100vh align-items-center py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={{span:12,order:1}} md={{span:7,order:2}} lg={{span:8,order:2}} className="minh-25vh"></Col>
                    <Col xs={{span:12,order:2}} md={{span:5,order:1}} lg={{span:4,order:1}} className="minh-50vh d-flex align-items-center">
                        <Card className="p-4 text-center text-md-start bg-dark border-info border-2 rounded-3 opacity-8">
                            <h5 className="text-muted">
                                Sed ut perspiciatis
                            </h5>
                            <h2 className="dispaly-6 fw-bold text-info text-shadow">
                                Unde omnis iste
                            </h2>
                            <p className="text-white">
                                Natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                                et quasi architecto beatae vitae dicta sunt explicabo. 
                            </p>
                            <div className="w-100">
                                <Link to="#" className="btn btn-info rounded-pill text-shadow text-white">
                                    Lorem ipsum <span className="fw-bold mx-1">dolor</span>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>   
        );
    }
}

export default ContactData;




