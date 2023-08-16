import React, { useState } from 'react';
import './UsForms.css';
import { Form, Col, Row, Container } from 'react-bootstrap';
import BmiChart from '../BmiChart/BmiChart';

const UsForms = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault()
        const heightInInches = parseInt(feet) * 12 + parseInt(inches);
        const heightInMeters = heightInInches * 0.0254;
        const weightInKilograms = parseInt(weight) * 0.453592;
        const bmiValue = (weightInKilograms / (heightInMeters * heightInMeters)).toFixed(1);
        setBMI(bmiValue);
    };

    return (
        <div className='p-5'>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='font-bold text-xl'>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>

                  
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="gender"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    checked={gender === 'male'}
                                    onChange={() => setGender('male')}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="gender"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    checked={gender === 'female'}
                                    onChange={() => setGender('female')}
                                />
                            </div>
                        ))}
                    

                    <Form.Group className="mb-3">
                        <Form.Label className='font-bold text-xl'>Height</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type='number' placeholder="Feet" value={feet} onChange={(e) => setFeet(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type='number' placeholder="Inches" value={inches} onChange={(e) => setInches(e.target.value)} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='font-bold text-xl'>Weight</Form.Label>
                        <Form.Control type="number" placeholder=" Pounds" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </Form.Group>

                    <button className="btn btn-primary" onClick={(e) => calculateBMI(e)}>Calculate BMI</button>

                    {bmi && (
                        <div className="mt-3">
                            <p className='font-bold text-xl'>BMI: {bmi}</p>
                            <BmiChart bmi={bmi} />
                        </div>
                    )}
                </Form>
            </Container>
        </div>
    );
}

export default UsForms;
