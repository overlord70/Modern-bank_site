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
  const novel_canvas = document.getElementById('novel_canvas')

  // new Chart(novel_canvas, {
  //   type: 'line',
  //   data: {
  //     labels: [],
  //     datasets: [{
  //       label: '# Market',
  //       data: [],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //       innerHeight: '200px',
  //       outerHeight: '200px',
  //     scales: {
  //       x: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });
  const data = {
    labels: ['01_23', '02_23', '03_23', '04_23', '05_23', '06_23', '07_23', '08_23', '09_23', '10_23', '11_23', '12_23', '01_24', '02_24', '03_24'],
    datasets: [{
      label: 'Looping tension',
      data: [65, 59, 80, 81, 26, 55, 40, 90, 39, 87, 11, 95, 60, 90, 70],
      fill: false,
      borderImageSource: 'linear-gradient(260.17deg, rgba(0, 151, 232, 0) -8.81%, #0097E8 59.83%, rgba(0, 151, 232, 0) 106.22%)',
    }]
  };
  new Chart(novel_canvas,{ 
    type: 'line',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true,
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    }
  }
  )
   const que_of_transactions = document.querySelector('.que_of_transactions')
  for (let i = 1; i <= 15; i++) {
    const news = document.createElement('div')
    const tick_time = document.createElement('h3')
    const inf_of_news = document.createElement('p')
    news.className = 'news'
    tick_time.innerHTML =i + moment().startOf('day').fromNow()
    inf_of_news.innerHTML = 'SEC Fails to Show Court Blockvest Tokens AreSecurities'
    news.append(tick_time, inf_of_news)
    que_of_transactions.append(news)
  }
