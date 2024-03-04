const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['05/02', '06/02', '07/02', '08/02', '09/02', '14/02', '15/02', '16/02', '19/02', '20/02', '21/02', '22/02', '23/02', '26/02', '27/02', '28/02', '29/02', '01/03'],
    datasets: [
      {
        label: 'Preço/dia',
        data: [127593.49, 130416.31, 129949.90, 128216.92, 128025.70, 127018.29, 127804.13, 128725.88, 129035.74, 129916.11, 130031.58, 130240.55, 129418.73, 129609.05, 131689.37, 130155.43, 129020.02, 129180.37],
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
  }
});
