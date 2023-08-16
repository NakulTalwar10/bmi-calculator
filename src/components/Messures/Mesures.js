import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Mesures = () => {
    const [input, setInput] = useState(0);
    const [inputUnit, setInputUnit] = useState('kilogram');
    const [result, setResult] = useState(0);
    const [resultUnit, setResultUnit] = useState('kilogram');

    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightUnit, setHeightUnit] = useState('feet+Inches');
    const [convertedHeight, setConvertedHeight] = useState('');

    const handleInputUnitChange = (e) => {
        const newInputUnit = e.target.value;
        setInputUnit(newInputUnit);
        setResultUnit(newInputUnit === 'kilogram' ? 'pounds' : 'kilogram');
        convertInputToResult(input, newInputUnit);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        convertInputToResult(inputValue, inputUnit);
    };

    const convertInputToResult = (value, unit) => {
        if (unit === 'kilogram') {
            setResult(value * 2.20462);
        } else if (unit === 'pounds') {
            setResult(value * 0.45359237);
        }
    };

    const handleHeightUnitChange = (e) => {
        const newHeightUnit = e.target.value;
        setHeightUnit(newHeightUnit);
        setConvertedHeight('');
    };

    const handleHeightFeetChange = (e) => {
        const feetValue = e.target.value;
        setHeightFeet(feetValue);
        convertFeetAndInchesToCm(feetValue, heightInches);
    };

    const handleHeightInchesChange = (e) => {
        const inchesValue = e.target.value;
        setHeightInches(inchesValue);
        convertFeetAndInchesToCm(heightFeet, inchesValue);
    };

    const convertFeetAndInchesToCm = (feet, inches) => {
        const totalInches = parseInt(feet) * 12 + parseInt(inches);
        const cmValue = totalInches * 2.54;
        setConvertedHeight(cmValue);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className='font-bold text-3xl d-flex justify-center my-2'>Weight Converter</h1>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Control type="number" name="input" value={input} placeholder="" onChange={handleInputChange} />
                                    <Form.Select aria-label="Default select example" value={inputUnit} onChange={handleInputUnitChange}>
                                        <option>Select</option>
                                        <option value="kilogram">Kilogram</option>
                                        <option value="pounds">Pounds</option>
                                    </Form.Select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Control type="number" name='result' value={result} placeholder="" readOnly />
                                    <Form.Select aria-label="Default select example" value={resultUnit}>
                                        <option>Select</option>
                                        <option value="kilogram">Kilogram</option>
                                        <option value="pounds">Pounds</option>
                                    </Form.Select>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h1 className='font-bold text-3xl d-flex justify-center my-2'>Height Converter</h1>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control type="number" name='feet' placeholder="Feet" value={heightFeet} onChange={handleHeightFeetChange} />
                                        </Col>
                                        {heightUnit === 'feet+Inches' && (
                                            <Col>
                                                <Form.Control type="number" name='inches' placeholder="Inches" value={heightInches} onChange={handleHeightInchesChange} />
                                            </Col>
                                        )}
                                    </Row>
                                    <Form.Select aria-label="Default select example" value={heightUnit} onChange={handleHeightUnitChange}>
                                        <option value="feet+Inches">Feet+Inches</option>
                                    </Form.Select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Control type="number" value={convertedHeight} readOnly />
                                    <Form.Select aria-label="Default select example" value={heightUnit}>
                                        <option value="cm">Cm</option>
                                    </Form.Select>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Mesures;
