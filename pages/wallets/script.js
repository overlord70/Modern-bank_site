import { getData } from "../../modules/http";
import { CreateHeader, reload } from "../../modules/ui";
import { Chart } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
const main = document.querySelector('.main')
CreateHeader(main)
const user = JSON.parse(localStorage.getItem('user'))
const overal_money_and_cards = document.querySelector('.overal_money_and_cards')
const add_wallet = document.querySelector('#add_wallet')
add_wallet.onclick = () => {
    location.assign('/pages/add_wallet/')
}
    getData('/wallets?user_id=' + user.id)
    .then(res => reload(res,overal_money_and_cards))
    
  