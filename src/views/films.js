import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import FilmsS1 from "../components/films-s1";

class Films extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <FilmsS1/>
            </Container>    
        );
    }
}

export default Films;