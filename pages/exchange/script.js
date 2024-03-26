import { getData, patch } from "../../modules/http";
import { CreateHeader } from "../../modules/ui";
import axios from "axios";
const user = JSON.parse(localStorage.getItem('user'))
const main = document.querySelector('.main')
CreateHeader(main)
const select = document.querySelector('#select')
const select_0 = document.querySelector('#select_0')
const symbols = JSON.parse(localStorage.getItem('symbols'))

for (const iterator of Object.keys(symbols)) {
    const opt = document.createElement('option')
    opt.innerHTML += `${iterator}`
    select.append(opt)
}

getData('/wallets?user_id=' + user.id)
 .then(res => {
    for (const item of res) {
        const option = document.createElement('option')
        option.innerHTML = item.name
        select_0.append(option)
    }
 })
 let selected_wallet_currency
 let selected_wallet_balance
 let wallet_id
 const input = document.querySelector('#first_h3')
 const input_2 = document.querySelector('#second_h3')
 select_0.onchange = (e) => {
    const val = e.target.value
   getData('/wallets?user_id=' + user.id)
      .then(res => {
          res.forEach(item => {
              if(item.name === val){
                  input.innerHTML =   item.balance 
                  input_2.innerHTML = item.currency
                  selected_wallet_currency = item.currency
                  selected_wallet_balance = item.balance
                  wallet_id = item.id
              }
          })
      })
 }
 const foirth = document.querySelector('#fourth_h3')
 const third = document.querySelector('#third_h3')
 let convert_to
 select.onchange = (e) => {
    const val = e.target.value
    convert_to = val
 }
 const line_h2_two = document.querySelector('#line_h2_two')
 const line_h2_one = document.querySelector('#line_h2_one')
 const exchage = document.querySelector('#exchange')
 exchage.onclick = () => {
    axios.get(`https://api.apilayer.com/fixer/convert?to=${convert_to}&from=${selected_wallet_currency}&amount=${selected_wallet_balance}`, {
       redirect: 'follow',
       headers: {
         "apikey": import.meta.env.VITE_API_KEY
       }
     })
       .then(res => {
         console.log(res.data);
         patch('/wallets/' + wallet_id, { balance: res.data.result, currency: res.data.query.to })
           .then(res => {
             third.innerHTML = `${res.balance} ${res.currency}`
             foirth.innerHTML = res.currency
           })
       })
 }
