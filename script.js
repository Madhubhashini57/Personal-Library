const genreCtx = document.getElementById('genreDistributionChart').getContext('2d');
new Chart(genreCtx, {
    type: 'pie',
    data: {
        labels: ['Fantasy', 'Thriller', 'Mystery', 'Horror', 'Romance'],
        datasets: [{
            label: 'Genre Distribution',
            data: [30, 30, 25, 5, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
//declair block-scoped local vari
const timeCtx = document.getElementById('readingTimeChart').getContext('2d');
new Chart(timeCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Reading Time (hours)',
            data: [2, 1.5, 3, 2, 2.5, 4, 3],
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value;
    alert(`Searching for: ${query}`);
});

