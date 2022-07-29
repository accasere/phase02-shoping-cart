import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css"
import React from "react";


export default function Products({ items, handleAddCart }) {

  return (
    <div className="products-container">
    
      {items.map((item) => (
        <div className="item-container" key={item.id}>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Price: $ {item.price}</Card.Text>
              <Button onClick={() => handleAddCart(item)} variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
