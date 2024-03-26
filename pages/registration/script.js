import axios from "axios"
import {postData, getData} from "../../modules/http"
const btns_of_regist = document.querySelectorAll('.btns_of_regist')
let prev = 1
const non_active = document.querySelector('#non_active')
btns_of_regist.forEach((btn, idx) => {
    btns_of_regist[1]
        .classList
        .add('active_btn')
    btn.onclick = () => {
        btns_of_regist[prev]
            .classList
            .remove('active_btn')
        btn
            .classList
            .add('active_btn')
        prev = idx
        if (btn.id === 'sign_up') {
            non_active
                .classList
                .remove('non_active')
            non_active
                .classList
                .add('active_form')
        } else {
            non_active
                .classList
                .add('non_active')
            non_active
                .classList
                .remove('active_form')
        }
    }
})
const form = document
    .forms
    .namedItem('sign_in')
form.onsubmit = (e) => {
    e.preventDefault()

    if (non_active.className === 'active_form') {
        const user = {}
        const fm = new FormData(e.target)
        fm.forEach((val, key) => user[key] = val)
        const {name, surname, password, email} = user
        if (name && surname && password && email) {
            getData('/users?email=' + email).then(res => {
                if (res.length === 0) {
                    postData('/users', user).then(res => {
                        if (res.status === 200 || res.status === 201) {
                            localStorage.setItem('user', JSON.stringify(res.data))
                            location.assign('/')
                        }
                    })
                } else {
                    alert('The account alredy exsists')
                    btns_of_regist[1].classList.add('active_btn')
                    btns_of_regist[0].classList.remove('active_btn')
                    non_active.classList.remove('active_form')
                    non_active.classList.add('non_active')
                    return
                }
            })
        }
    } else {
        const user = {}

        const fm = new FormData(e.target)

        fm.forEach((val, key) => user[key] = val)

        const {email, password} = user

        if (email && password) {
            getData('/users?email=' + email).then((res) => {
                const [res_user] = res

                if (!res_user) {
                    alert('There is no similar account!')
                    return
                }
                if (res_user.password !== password) {
                    alert('Wrong password!')
                    return
                }

                localStorage.setItem("user", JSON.stringify(res_user))
                location.assign('/')
            })
        }
    }
}