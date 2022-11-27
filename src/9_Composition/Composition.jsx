import React from 'react'
// import Button from './Button'
import { Button, Card } from "react-bootstrap";
const Composition = () => {
  // 
  return (
    <div>
      <h1>React Bootstrap</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="success" disabled>
        Secondary
      </Button>

      <br />
      <br />

      <Card className="w-25" bg="secondary">
        <Card.Img src="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title>Hello BC27</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            voluptatibus?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};



export default Composition
// MUI và Ant design và Mantine