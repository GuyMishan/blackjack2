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
  });

  const handleChange = name => event => {
    setUser({ ...user, [name]: event.target.value })
  }

  const clickSubmit = (event: any) => {
    //event.preventDefault()
    axios.post(`https://localhost:7073/api/User/signin`,  user )
      .then(res => {
        history.push(`/game/${res.data[0].userId}`)
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
                <small>BlackJack - Signin</small>
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
                <Row>
                  <Col>
                    <div className="text-center">
                      <Button onClick={clickSubmit} className="btn-new-blue">Signin</Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="text-center">
                      <Button onClick={() => { history.push(`/signup`) }} className="btn-new-blue">Signup</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
