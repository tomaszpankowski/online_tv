import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Card from "../../node_modules/react-bootstrap/Card";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class MoviesS3 extends Component{
    render(){
        return(    
            <Container fluid className="movies-s3 d-flex minh-50vh align-items-center py-5 border-top border-info">
            <Row className="mx-0 w-100 mt-5">
                <Col xs={{span:12,order:1}} md={{span:7,order:2}} lg={{span:8,order:2}} className="minh-25vh"></Col>
                <Col xs={{span:12,order:2}} md={{span:5,order:1}} lg={{span:4,order:1}} className="minh-50vh d-flex align-items-center">
                    <Card className="text-center text-md-start opacity-8 bg-dark border border-2 border-info rounded-3 p-4">
                        <h5 className="text-secondary">
                            Sed ut perspiciatis
                        </h5>
                        <h2 className="dispaly-6 fw-bold text-info text-shadow">
                            Unde omnis iste
                        </h2>
                        <p className="text-white initialism">
                            Natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                            et quasi architecto beatae vitae dicta sunt explicabo. Nemo 
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                            fugit, sed quia consequuntur magni dolores eos qui ratione 
                            voluptatem sequi nesciunt. Neque porro quisquam est
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default MoviesS3;