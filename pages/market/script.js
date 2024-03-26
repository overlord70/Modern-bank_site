import { CreateHeader } from "../../modules/ui"
import Chart from 'chart.js/auto';
const section = document.querySelector('.main')
CreateHeader(section)
const mycanvases = document.querySelectorAll('.mycanvas')
mycanvases.forEach(mycanvase => {
    new Chart(mycanvase, {
        type: 'line',
        data: {
          labels: ['20-03-20204', '21-03-20204', '22-03-20204', '23-03-20204', '24-03-20204', '25-03-20204'],
          datasets: [{
            label: '# of Votes',
            data: [100, 50, 120, 70, 170, 107],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
})
Chart.defaults.color = 'green'