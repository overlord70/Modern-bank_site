import { CreateHeader, reload } from "./modules/ui"
import {getData} from './modules/http'
import moment from "moment/moment"
import Chart from 'chart.js/auto';
const user = JSON.parse(localStorage.getItem('user'))
const section_main = document.querySelector('.main')
CreateHeader(section_main)

const time = document.querySelector('.aplince h3')
time.innerHTML = moment().format('Do MMMM') + ', ' + moment().format('dddd')
const rel = document.querySelector('#reload')
getData('/wallets?user_id=' + user.id)
    .then(res => {
       reload(res.slice(0, 4), rel)
    })

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: '# of Votes',
      data: [64, 18, 18],
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
const chart = document.getElementById('chart');

new Chart(chart, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'lk', 'kll', '90'],
      datasets: [{
        label: '# of Votes',
        data: [1, 2, 3, 4, 95, 96, 7, 8, 9, 10, 3],
        borderWidth: 1
      }]
    },
    options: {
        innerHeight: '200px',
        outerHeight: '200px',
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  });
  const options = document.querySelectorAll('option')
  const time_h3 = document.querySelector('.flex_time h3')
  options.forEach(opt => {
     if(time_h3.innerHTML.includes(opt.innerHTML)){
      opt.selected = true
     }
  })