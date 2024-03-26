import moment from 'moment';
import { getData, patch, postData } from '../../modules/http';
import axios from 'axios';
    const form = document.forms.transactionAdd;
    const select = document.querySelector('#wallet')
    const total_inp = document.querySelector('#total')
    const user = JSON.parse(localStorage.getItem('user'))
    let wallets = []
    let selected_wallet = null

    getData('/wallets?user_id=' + user.id).then(res => {
        for (let item of res) {
            let opt = new Option(`${item.name}`, item.id)

            if (res.indexOf(item) === 0) {
                opt.selected = true
                selected_wallet = item
            }

            select.append(opt)
        }

        wallets = res
    })

    select.onchange = (e) => {
        const id = e.target.value
        console.log(selected_wallet);
        selected_wallet = wallets.find(el => el.id === id)
    }

    total_inp.onkeyup = (e) => {
        const val = e.target.value
        console.log(selected_wallet);
        if (+val > +selected_wallet.balance) {
            e
                .target
                .classList
                .add('error_input')
        } else {
            e
                .target
                .classList
                .remove('error_input')
        }

    }

    form.onsubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const transaction = {
            created_at: moment().format("LT"),
            created_on: moment().format("D MMMM YYYY"),
            user_id: user.id
        };
        formData.forEach((val, key) => transaction[key] = val)

        if (total_inp.value > 0 && !total_inp.classList.contains('error_input')) {
            selected_wallet.balance = +selected_wallet.balance - +total_inp.value

            transaction.wallet_id = selected_wallet.id
            delete selected_wallet.id
            delete selected_wallet.user_id
            transaction.wallet = selected_wallet

            patch(`/wallets/${transaction.wallet_id}`, {balance: selected_wallet.balance})
            .then(res => {
                    postData('/transactions', transaction)
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            location.assign('/pages/transactions/')
                        }
                    })
                }
            )
        } else {
            alert('not enough money!')
        }
    }