export const chartOptions = {
    datasetFill: false,
    responsive: true,
    scaleLineColor: '#5297e0',
    scaleFontColor: '#5297e0',
    pointDotRadius: 2,
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
            display: false,
            scaleLabel: {
                display: false,
                labelString: 'Mana cost',
            },
        }],
        yAxes: [{
            display: false,
            scaleLabel: {
                display: false,
                labelString: 'Cards count',
            },
        }],
    },
};
