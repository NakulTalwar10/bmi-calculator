import React, { useState } from 'react';
import './Home.css';
import { Col, Container, Navbar, Row, Nav, Table } from 'react-bootstrap';
import UsForms from '../US-Forms/UsForms';
import Metric from '../Metric/Metric';
import Mesures from '../Messures/Mesures';

const Home = () => {
    const [selectedUnit, setSelectedUnit] = useState('us'); // Default unit is 'us'

    const handleUnitChange = (unit) => {
        setSelectedUnit(unit);
    };

    return (
        <div >
            <Container fluid className='flex items-center my-3'>
                <Row className=''>
                    <Col >
                        <h1 className='font-bold text-3xl text-center my-4'>Body Mass Index</h1>
                        <p className='font-semibold text-xl mx-4'>Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.</p>
                    </Col>
                    <Col >
                        <Navbar>
                            <Container fluid>
                                <Nav className="me-auto">
                                    <Nav.Link
                                        onClick={() => handleUnitChange('us')}
                                        className={`font-bold text-[white] bg-[blue] mx-2 hover:text-white hover:bg-[grey] ${selectedUnit === 'us' ? 'bg-[grey]' : ''}`}
                                    >
                                        US-Units
                                    </Nav.Link>
                                    <Nav.Link
                                        onClick={() => handleUnitChange('metric')}
                                        className={`font-bold text-[white] bg-[blue] mx-2 hover:text-white hover:bg-[grey] ${selectedUnit === 'metric' ? 'bg-[grey]' : ''}`}
                                    >
                                        Metric Units
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        {selectedUnit === 'us' && <UsForms />}
                        {selectedUnit === 'metric' && <Metric />}
                    </Col>
                </Row>
            </Container>
            <div className='my-2'>
                <Mesures />
            </div>
            <Container>
                <div className='my-4'>
                    <h1 className='font-bold text-3xl d-flex justify-center'>BMI table for Adults</h1>
                    <p className='font-semibold text-xl'>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.</p>

                    <Table striped bordered hover className='my-3'>
                        <thead className='bg-[blue] font-bold'>
                            <tr>

                                <th className=' text-white'>Classification</th>
                                <th className=' text-white'>BMI range - kg/m2</th>
                            </tr>
                        </thead>
                        <tbody className='font-bold'>
                            <tr>
                                <td>Severe Thinness</td>
                                <td> less than 16 </td>
                            </tr>
                            <tr>

                                <td>Moderate Thinness</td>
                                <td>16 - 17</td>

                            </tr>
                            <tr>

                                <td>Mild Thinness</td>
                                <td>17 - 18.5</td>

                            </tr>
                            <tr>

                                <td>Normal</td>
                                <td>18.5 - 25</td>

                            </tr>
                            <tr>

                                <td>Overweight</td>
                                <td>25 - 30</td>

                            </tr>
                            <tr>

                                <td>Obese Class I</td>
                                <td>30 - 35</td>

                            </tr>
                            <tr>

                                <td>Obese Class II</td>
                                <td>35 - 40</td>

                            </tr>
                            <tr>

                                <td>Obese Class III</td>
                                <td>Greater than 40</td>

                            </tr>

                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default Home;
