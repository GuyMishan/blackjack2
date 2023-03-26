import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  Container,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import history from '../history'

const App: React.FC = () => {
  const [user, setUser] = useState({
    Username: '',
    Password: '',
    Currency: 1000,
  });

  const handleChange = name => event => {
    setUser({ ...user, [name]: event.target.value })
  }

  const clickSubmit = (event: any) => {
    //event.preventDefault()
    console.log(user)
    axios.post(`https://localhost:7073/api/User`, user )
      .then(res => {
        history.push(`/signin`)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div style={{display:'flex',alignItems:'center'}}>
      <Container >
        <Row className="justify-content-center">
          <Card className="shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
              </div>
              <div className="text-center text-muted mb-4">
                <small>BlackJack - Signup</small>
              </div>
              <Form role="form" >
                <FormGroup className="mb-3">
                  <div>
                    <Input onChange={handleChange('Username')} placeholder="Username" value={user.Username} />
                  </div>
                  <div style={{paddingTop:'15px'}}>
                    <Input onChange={handleChange('Password')} placeholder="Password" value={user.Password} />
                  </div>
                </FormGroup>
                    <div className="text-center">
                      <Button onClick={clickSubmit} className="btn-new-blue">Signup</Button>
                    </div>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
