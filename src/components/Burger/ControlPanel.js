import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import IngredientButton from "components/Burger/IngredientButton";

const ControlPanel = (props) => {
	return (
		<Container>
			<Row className="justify-content-center py-3">
				Current Price: $ {props.price.toFixed(2)}
			</Row>
			<Row>
				<Col>
					{Object.entries(props.ingredients).map(([key, value]) => (
						<IngredientButton
							key={key}
							label={key}
							added={() => props.ingredientAdded(key)}
							removed={() => props.ingredientRemoved(key)}
							disabled={value === 0}
							value={value}
						/>
					))}
				</Col>
			</Row>
			<Row>
				<Modal show={props.show} onHide={props.onClose}>
					<Modal.Header closeButton>
						<Modal.Title>Order Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ul>
							{Object.entries(props.ingredients).map(([key, value]) => (
								<li>{key} - {value}</li>
							))}
						</ul>
					</Modal.Body>
					<Modal.Footer className="justify-content-center">
						<Button variant="secondary" onClick={props.onClose}>
							Cancel
						</Button>
						<Button variant="primary" as={Link} to="/checkout">
							Checkout
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
			<Row className="justify-content-center my-3">
				<Button size="lg" disabled={!props.purchasable} onClick={props.ordered}>
					Submit
				</Button>
			</Row>
		</Container>
	);
};

export default ControlPanel;
