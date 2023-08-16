import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const BmiChart = ({ bmi }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (!chartInstanceRef.current) {
            // Create the chart instance when the component mounts
            if (chartRef.current) {
                const data = {
                    labels: ['BMI'],
                    datasets: [
                        {
                            data: [bmi, 25 - bmi], // Proportional values for BMI and the remaining
                            backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(0,0,0,0.2)'], // Colors for the two segments
                            borderWidth: 1,
                        },
                    ],
                };

                const options = {
                    maintainAspectRatio: false,
                    responsive: false, // Disable responsiveness
                    cutout: '80%', // Adjust the cutout to control the thickness of the chart
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                };

                const newChartInstance = new Chart(chartRef.current, {
                    type: 'doughnut', // Use 'doughnut' for a round chart
                    data: data,
                    options: options,
                });

                chartInstanceRef.current = newChartInstance; // Update the chart instance reference
            }
        } else {
            // Update the chart data when BMI changes
            if (chartInstanceRef.current.data.datasets[0].data[0] !== bmi) {
                chartInstanceRef.current.data.datasets[0].data[0] = bmi;
                chartInstanceRef.current.data.datasets[0].data[1] = 25 - bmi;
                chartInstanceRef.current.update();
            }
        }
    }, [bmi]);

    return <canvas ref={chartRef} id="myChart" width="150" height="150" style={{ width: '150px', height: '150px' }} />; // Fixed dimensions
};

export default BmiChart;
