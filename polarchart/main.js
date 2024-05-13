import Chart from 'chart.js/auto';
const defaultData = {
    labels: ['A', 'B', 'C'],
    datasets: [{
        label: 'My Dataset',
        data: [10, 5, 14],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)'
        ]
    }]
};

const config = {
    type: 'polarArea',
    data: defaultData,
    options: {}
};

const chartCanvas = document.getElementById('acquisitions');
const ctx = chartCanvas.getContext('2d');
const chart = new Chart(ctx, config);

function addValue() {
    const value = parseInt(document.getElementById('value').value);
    const section = document.getElementById('section').value;

    
}


function addSection() {
    const newSection = document.getElementById('newSection').value;
    const newValue = parseInt(document.getElementById('newValue').value);

    defaultData.labels.push(newSection);
    defaultData.datasets[0].data.push(newValue);
    defaultData.datasets[0].backgroundColor.push(getRandomColor());

    chart.update();
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}