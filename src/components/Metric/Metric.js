import React, { useState } from 'react';
import './Metric.css';
import { Form, Container } from 'react-bootstrap';
import BmiChart from '../BmiChart/BmiChart';


const Metric = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault()
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100; // Convert cm to meters
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBMI(bmiValue);
        }
    };
    return (
        <div className='p-5'>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='font-bold text-xl'>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>

                    <Form>
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
                    </Form>

                    <Form.Group className="mb-3">
                        <Form.Label className='font-bold text-xl'>Height (cm)</Form.Label>
                        <Form.Control type="number" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='font-bold text-xl'>Weight (kg)</Form.Label>
                        <Form.Control type="number" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
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

export default Metric;
