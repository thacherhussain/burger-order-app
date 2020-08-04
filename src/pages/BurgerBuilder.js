import React from "react";
// import Header from './components/Header';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Jumbotron } from "react-bootstrap";

const BurgerBuilder = () => {
    return (
        <Container fluid>
			<Row>
				<Col className="justify-content-center">
					<Jumbotron>
						<h1>Halp.</h1>
						<p>
							Tungg many pats thicc, corgo. Shoob extremely cuuuuuute big ol
							doing me a frighten long woofer porgo shooberino super chub
							yapper, doggorino maximum borkdrive many pats much ruin diet you
							are doing me a frighten lotsa pats.
						</p>
						<Button>Press Me.</Button>
					</Jumbotron>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Button>Halp. Escaped Doggo on the loose!</Button>
			</Row>
		</Container>
    );
};

export default BurgerBuilder;
