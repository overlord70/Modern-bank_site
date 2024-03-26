import { CreateHeader, reloadTransaction } from "../../modules/ui";
import axios from "axios";
import moment from "moment/moment";
import { getData } from "../../modules/http";
const user = JSON.parse(localStorage.getItem('user'))
const header = document.querySelector('.main')
CreateHeader(header)
const trs = document.querySelectorAll('.trs')
let prev = 0
trs[0].classList.add('active_tr')
trs.forEach((tr, idx) => {
    tr.onclick = () => {
        trs[prev].classList.remove('active_tr')
        tr.classList.add('active_tr')
        prev = idx
    }
})
const place_for_transactions = document.querySelector('.place_for_transactions')
getData('/transactions?user_id=' + user.id)
    .then(res => {
            reloadTransaction(res, place_for_transactions)
    })
    const bty = document.querySelector('#bty')
    bty.onclick = () => {
        location.assign('/pages/add_transaction/')
    }