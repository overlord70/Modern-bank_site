import { getData } from "../../modules/http";
import { CreateHeader, reload, reloadTransaction, reload_cards_for_market } from "../../modules/ui";
import { Chart } from 'chart.js/auto';
const main = document.querySelector('.main')
CreateHeader(main)
const user = JSON.parse(localStorage.getItem('user'))
const overal_money_and_cards = document.querySelector('.overal_money_and_cards')
const add_wallet = document.querySelector('#add_wallet')
add_wallet.onclick = () => {
    location.assign('/pages/add_wallet/')
}
    getData('/wallets?user_id=' + user.id)
    .then(res => {
        reload(res,overal_money_and_cards)
    })
    
  const ccanvvas = document.querySelector('#ccanvvas')
  const data = {
    labels: ['01_23', '02_23', '03_23', '04_23', '05_23', '06_23', '07_23', '08_23', '09_23', '10_23', '11_23', '12_23', '01_24', '02_24', '03_24'],
    datasets: [{
      label: 'Looping tension',
      data: [65, 59, 80, 81, 26, 55, 40, 90, 39, 87, 11, 95, 60, 90, 100],
      fill: false,
      borderImageSource: 'linear-gradient(260.17deg, rgba(0, 151, 232, 0) -8.81%, #0097E8 59.83%, rgba(0, 151, 232, 0) 106.22%)',
    }]
  };
  new Chart(ccanvvas,{ 
    type: 'line',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { 
          min: 0,
          max: 100
        }
      }
    }
  }
  )
  const line_of_transactions = document.querySelector('.line_of_transactions')
  getData('/transactions?user_id=' + user.id)
  .then(res => {
    reload_cards_for_market(res, line_of_transactions)
  })