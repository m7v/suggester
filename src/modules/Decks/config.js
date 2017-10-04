export const options = {
    datasetFill: false,
    responsive: true,
    scaleLineColor: '#5297e0',
    scaleFontColor: '#5297e0',
    pointDotRadius: 2,
    title: {
        display: true,
        text: 'Chart.js Line Chart',
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true,
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Mana cost',
            },
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Cards count',
            },
        }],
    },
};
