import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderConfirmationModal = (props) => {
	const ingredients = props.ingredients;

	return (
		<>
			<Modal show={props.show} onHide={props.onClose}>
				<Modal.Header closeButton>
					<Modal.Title>Order Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{" "}
					Text Here
					<ul>
						{ingredients.map((ingredient) => (
							<li>
								<span>{ingredient}</span>
								<span>({props.values[ingredient]})</span>
							</li>
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
		</>
	);
};

export default OrderConfirmationModal;
