
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <h1>Hello to my first react page loool</h1>
     <h2> Please Help</h2>
     <Container fluid>
      <Form>
        <Form.Group>
          <Form.Label><h1>Name</h1></Form.Label>
          <Form.Control name='name' placeholder='type your name here'/>
          </Form.Group>
          <Form.Group>
          <Form.Label><h2>UserName</h2></Form.Label>
          <Form.Control name='username' placeholder='type your username here'/>
          </Form.Group>
          <Form.Group>
          <Form.Label><h4>Password</h4></Form.Label>
          <Form.Control name='password'  type='password'placeholder='type your password'/>
          </Form.Group>
          <Form.Group>
          <Form.Label><h3>Opinion</h3></Form.Label>
          <Form.Control name='opin' placeholder='tell me what do you think' as='textarea'/>
          </Form.Group>
          <Form.Group>
          <Form.Label><h3>Your Favorite Course Part </h3></Form.Label> <br></br>
          <Form.Check name='code' label='HTML' inline/>
          <Form.Check name='code' label='CSS' inline/>
          <Form.Check name='code' label='JS' inline/>
          <Form.Check name='code' label='JS-ES6' inline/>
          <Form.Check name='code' label='Algo' inline/>
          <Form.Check name='code' label='React'inline />
          </Form.Group>
          <Form.Group>
          <Form.Label><h3>Rate your Instructor </h3></Form.Label> <br></br>
          <Form.Check name='rate' label='Excellent' type='radio' inline/>
          <Form.Check name='rate' label='Very good' type='radio' inline/>
          <Form.Check name='rate' label='Good' type='radio' inline/>
          
          </Form.Group>
          
      <Button variant="primary" type="submit">
        Submit
      </Button>
    
      </Form>
      </Container>
    </div>
  );
}

export default App;
