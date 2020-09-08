import React from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import IngredientButton from "components/Burger/IngredientButton";
import TotalPrice from 'components/UI/TotalPrice';

const ControlPanel = (props) => {
	return (
		<Container>
			<Row className="justify-content-center py-3">
				<TotalPrice />
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
						<Row>
							<Col sm={{ span: 4, offset: 2 }}>
								<Image fluid src={require("../../assets/images/burger.jpg")} style={{ width: 150 }} />
							</Col>
							<Col sm={4}>
								<ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
									{Object.entries(props.ingredients).map(([key, value]) => (
										<li key={key}>{key} - {value}</li>
									))}
								</ul>
							</Col>
						</Row>
						<Row className="justify-content-center py-3">
							<TotalPrice />
						</Row>
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
