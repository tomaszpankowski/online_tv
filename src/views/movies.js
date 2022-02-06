import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import MoviesS1 from "../components/movies-s1";
import MoviesS2 from "../components/movies-s2";
import MoviesS3 from "../components/movies-s3";
import MoviesS4 from "../components/movies-s4";

class Movies extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <MoviesS1/>
                <MoviesS2/>
                <MoviesS3/>
                <MoviesS4/>
            </Container>    
        );
    }
}

export default Movies;