import React, {useState} from 'react';
import { Col, Row, Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';


                  

    const EmployeeRegee = (props) => {
                            const [cSelected, setCSelected] = useState([]);
                            const [rSelected, setRSelected] = useState(null);
                          
                            const onCheckboxBtnClick = (selected) => {
                              const index = cSelected.indexOf(selected);
                              if (index < 0) {
                                cSelected.push(selected);
                              } else {
                                cSelected.splice(index, 1);
                              }
                              setCSelected([...cSelected]);}

                            return (
                              <Form>
                                <h2>Employe Registration</h2>
                                <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                      <Label for="branchName">Branch Name/ Code *</Label>
                                      <Input type="email" name="email" id="branchName" placeholder="Branch Name / Code" />
                                    </FormGroup>
                                  </Col>
                                  <FormGroup>
                                  <Label for="designation">Designation *</Label>
                                  <Input type="select" name="selectMulti" id="designation" >
                                    <option>Director</option>
                                    <option>Executive Director</option>
                                    <option>Program Director</option>
                                    <option>Admin</option>
                                    <option>Zonal Manager</option>
                                    <option>Area Manager</option>
                                    <option>Asst. Manager</option>
                                    <option>Account Officer</option>
                                    <option>HR Officer</option>
                                    <option>Office Assitant</option>
                                    <option>Front Desk Officer</option>

                                  </Input>
                                </FormGroup>
                                
                                <Col md={5}>
                                    <ButtonGroup>
                                    <p >Job Type *</p> &nbsp; &nbsp; &nbsp;
                                    <Button size="sm" color="primary" onClick={() => setRSelected(1)} active={rSelected === 1} >Parmanent</Button>
                                    <Button size="sm" color="primary" onClick={() => setRSelected(2)} active={rSelected === 2} >Contractual</Button>
                                    </ButtonGroup>
                                    </Col>
                                    <Col md={2}>
                                    <FormGroup>
                                    <Label for="grade">Grade *</Label>
                                    <Input type="select" name="selectMulti" id="grade" >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      </Input>
                                      </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                      <Label for="basicSalary">Basic Salary *</Label>
                                      <Input type="text" name="salary" id="basicSalary" placeholder="Basic Salary" />
                                    </FormGroup>
                                  </Col>   

                                  <Col md={4}>
                                    <FormGroup>
                                      <Label for="providentFund">Provident Fund *</Label>
                                      <Input type="email" name="email" id="providentFund" placeholder="Provident Fund" />
                                    </FormGroup>
                                  </Col> 

                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="fullName">Full Name *</Label>
                                      <Input type="email" name="email" id="fullName" placeholder="First Name" />
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="fatherName">Father's Name *</Label>
                                      <Input type="email" name="email" id="fatherName" placeholder="Father's Name" />
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="Mothername">Mother's Name *</Label>
                                      <Input type="email" name="email" id="Mothername" placeholder="Mother's Name" />
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="dateOfBurth">Date of Burth *</Label>
                                      <Input type="email" name="email" id="dateOfBurth" placeholder="22/12/2020" />
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="nationalId">NID Number *</Label>
                                      <Input type="email" name="email" id="nationalId" placeholder="NID Number" />
                                    </FormGroup>
                                  </Col>

                                  <FormGroup>
                                    <Label for="religion ">Religion *</Label>
                                    <Input type="select" name="selectMulti" id="religion " >
                                      <option>Islam</option>
                                      <option>Hinduism </option>
                                      <option>Buddhism </option>
                                      <option>Christianity</option>
                                      <option>Others</option>
                                      
                                      </Input>
                                      </FormGroup>
                                      <Col md={2}>
                                      <FormGroup>
                                    <Label for="country ">Country *</Label>
                                    <Input type="select" name="selectMulti" id="country " >
                                      <option>Bangladesh</option>
                                      <option>India </option>
                                      <option>Pakistan </option>
                                      <option>Nepal</option>
                                      <option>Bhutan</option>
                                      
                                      </Input>
                                      </FormGroup>
                                      </Col>

                                      <Col md={5}>
                                    <ButtonGroup>
                                    <p >Gender *</p> &nbsp; &nbsp; &nbsp;
                                    <Button size="sm" color="primary" onClick={() => setRSelected(1)} active={rSelected === 1} >Male</Button>
                                    <Button size="sm" color="primary" onClick={() => setRSelected(2)} active={rSelected === 2} >Female</Button>
                                    <Button size="sm" color="primary" onClick={() => setRSelected(2)} active={rSelected === 2} >Others</Button>
                                    </ButtonGroup>
                                    </Col>
                                    <Col md={4}>
                                    <ButtonGroup>
                                    <p >Marital Status *</p> &nbsp; &nbsp; &nbsp;
                                    <Button size="sm" color="primary" onClick={() => setRSelected(1)} active={rSelected === 1} >Single</Button>
                                    <Button size="sm" color="primary" onClick={() => setRSelected(2)} active={rSelected === 2} >Married</Button>
                                    <Button size="sm" color="primary" onClick={() => setRSelected(2)} active={rSelected === 2} >Others</Button>
                                    </ButtonGroup>
                                    </Col>
                                    <Col md={2}>
                                    <FormGroup>
                                      <Label for="contactNo">Contact Number *</Label>
                                      <Input type="text" name="contuct" id="contactNo" placeholder="Contact Number" />
                                    </FormGroup>
                                  </Col>
                                  
                                  <Row form>
                                  
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="exampleCity">City</Label>
                                      <Input type="text" name="city" id="exampleCity"/>
                                    </FormGroup>
                                  </Col>
                                  <Col md={4}>
                                    <FormGroup>
                                      <Label for="exampleState">State</Label>
                                      <Input type="text" name="state" id="exampleState"/>
                                    </FormGroup>
                                  </Col>
                                  <Col md={2}>
                                    <FormGroup>
                                      <Label for="exampleZip">Zip</Label>
                                      <Input type="text" name="zip" id="exampleZip"/>
                                    </FormGroup>  
                                  </Col>
                                </Row>
                                </Row>
                                <FormGroup>
                                  <Label for="exampleAddress">Address</Label>
                                  <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                                </FormGroup>
                                <FormGroup>
                                  <Label for="exampleAddress2">Address 2</Label>
                                  <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                                </FormGroup>
                                <Row form>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="exampleCity">City</Label>
                                      <Input type="text" name="city" id="exampleCity"/>
                                    </FormGroup>
                                  </Col>
                                  <Col md={4}>
                                    <FormGroup>
                                      <Label for="exampleState">State</Label>
                                      <Input type="text" name="state" id="exampleState"/>
                                    </FormGroup>
                                  </Col>
                                  <Col md={2}>
                                    <FormGroup>
                                      <Label for="exampleZip">Zip</Label>
                                      <Input type="text" name="zip" id="exampleZip"/>
                                    </FormGroup>  
                                  </Col>
                                </Row>
                                <FormGroup check>
                                  <Input type="checkbox" name="check" id="exampleCheck"/>
                                  <Label for="exampleCheck" check>Check me out</Label>
                                </FormGroup>
                                <Button>Sign in</Button>
                              </Form>
                            );
                          }

                          export default EmployeeRegee