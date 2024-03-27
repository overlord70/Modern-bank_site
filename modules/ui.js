const user = JSON.parse(localStorage.getItem('user'))
function getRGB() {

    let r = Math.floor(Math.random() * 145)
    let g = Math.floor(Math.random() * 70)
    let b = Math.floor(Math.random() * 223)

    return `rgb(${r}, ${g}, ${b})`
}
export function CreateHeader(place) {

    const header = document.createElement('div')
    const left = document.createElement('div')
    const img_bell = document.createElement('img')
    const img_letter = document.createElement('img')
    const right = document.createElement('div')
    const input = document.createElement('input')
    const img_search = document.createElement('img')
    const aside = document.createElement('aside')
    const log_out = document.createElement('div')
    const img_log_out = document.createElement('img')
    const h2_log_out = document.createElement('h2')
    const account = document.createElement('div')
    const img_circle = document.createElement('img')
    const heading = document.createElement('div')
    const h1 = document.createElement('h1')
    const line = document.createElement('div')
    const nav_link1 = document.createElement('div')
    const img_main = document.createElement('img')
    const overview = document.createElement('p')
    const nav_link2 = document.createElement('div')
    const img_wallet = document.createElement('img')
    const wallets = document.createElement('p')
    const nav_link3 = document.createElement('div')
    const img_transaction = document.createElement('img')
    const transictions = document.createElement('p')
    const nav_link4 = document.createElement('div')
    const img_exchange = document.createElement('img')
    const exchange = document.createElement('p')
    const nav_link5 = document.createElement('div')
    const img_shop = document.createElement('img')
    const footer = document.createElement('footer')
    const line_2 = document.createElement('div')
    const user_name = document.createElement('h2')
    // b
    img_bell.src = '/public/bell.svg'
    img_letter.src = '/public/letter.svg'
    header
        .classList
        .add('header')
    log_out
        .classList
        .add('log_out')
    user_name
        .classList
        .add('user')
    aside
        .classList
        .add('aside')
    footer
        .classList
        .add('footer')
    heading
        .classList
        .add('heading')
    nav_link1
        .classList
        .add('nav_link')
    nav_link2
        .classList
        .add('nav_link')
    nav_link3
        .classList
        .add('nav_link')
    nav_link4
        .classList
        .add('nav_link')
    nav_link5
        .classList
        .add('nav_link')
    line
        .classList
        .add('line')
    line_2
        .classList
        .add('line')
    overview
        .classList
        .add('link')
    wallets
        .classList
        .add('link')
    transictions
        .classList
        .add('link')
    img_circle.src = '/public/circle.svg'
    img_log_out.src = '/public/log_out.svg'
    h2_log_out.innerHTML = 'Log out'
    img_transaction.src = '/public/transaction.svg'
    img_main.src = '/public/main.svg'
    img_wallet.src = '/public/wallet.svg'
    img_exchange.src = '/public/exchange.svg'
    img_search.src = '/public/search.svg'
    img_shop.src = '/public/shop.svg'
    h1.innerHTML = 'valuet'
    overview.innerHTML = 'Overview'
    wallets.innerHTML = 'Wallets'
    user_name.innerHTML = user.name + ' ' + user.surname
    transictions.innerHTML = 'Transictions'
    exchange.innerHTML = 'Exchange'
    right.className = 'right'
    left.className = 'left'
    account.className = 'account'
    // c
    right.append(img_letter, img_bell)
    left.append(input, img_search)
    header.append(left, right)
    account.append(img_circle, user_name)
    log_out.append(img_log_out, h2_log_out)
    nav_link4.append(img_exchange, exchange)
    nav_link3.append(img_transaction, transictions)
    nav_link2.append(img_wallet, wallets)
    nav_link1.append(img_main, overview)
    heading.append(h1, line)
    footer.append(line_2, account, log_out)
    aside.append(
        heading,
        nav_link1,
        nav_link2,
        nav_link3,
        nav_link4,
        footer
    )
    place.append(aside, header)

    // d
    if(location.pathname.includes('/wallets')){
        wallets.parentElement.classList.add('active_link')
    } else if(location.pathname.includes('/transactions')){
        transictions.parentElement.classList.add('active_link')
    } else if(location.pathname.includes('/exchange')){
        exchange.parentElement.classList.add('active_link')
    } else {
        overview.parentElement.classList.add('active_link')
    }
    wallets.parentElement.onclick = () => {
        location.assign('/pages/wallets/')
    }
    transictions.parentElement.onclick = () => {
        location.assign('/pages/transactions/')
    }
    overview.parentElement.onclick = () => {
        location.assign('/')
    }
    exchange.parentElement.onclick = () => {
        location.assign('/pages/exchange/')
        console.log(location.pathname);
    }
    img_log_out.onclick = () => {
        localStorage.removeItem('user')
        img_log_out.style.cursor = 'pointer'
        location.assign('/pages/registration/')
    }
const username = document.querySelector('.user')
username.innerHTML = user.name + ' ' + user.surname
}

export function reload(arr, place) {
    // place.innerHTML = ""

    for (const item of arr) {
        // a
        const card = document.createElement('div')
        const h2 = document.createElement('h2')
        const one_more_flex = document.createElement('div')
        const flex = document.createElement('div')
        const currenncy_of_your_card = document.createElement('div')
        const img_1 = document.createElement('img')
        const img_2 = document.createElement('img')
        const money_of_card = document.createElement('div')
        const white = document.createElement('p')
        const its_money = document.createElement('span')
        const card_currency = document.createElement('span')
        const grey = document.createElement('p')
        const its_money_in_dollars = document.createElement('span')
        const table = document.createElement('table')
        const tr_1 = document.createElement('tr')
        const tr_1_td_1 = document.createElement('td')
        const tr_1_td_1_img = document.createElement('img')
        const tr_1_td_2 = document.createElement('td')
        const changichg = document.createElement('div')
        const one = document.createElement('p')
        const two = document.createElement('p')
        const tr_2 = document.createElement('tr')
        const tr_2_td_1 = document.createElement('td')
        const tr_2_td_1_img = document.createElement('img')
        const tr_2_td_2 = document.createElement('td')
        const changichg_2 = document.createElement('div')
        const one_2 = document.createElement('p')
        const two_2 = document.createElement('p')
        const tr_3 = document.createElement('tr')
        const tr_3_td_1 = document.createElement('td')
        const tr_3_td_1_img = document.createElement('img')
        const tr_3_td_2 = document.createElement('td')
        const changichg_3 = document.createElement('div')
        const one_3 = document.createElement('p')
        const two_3 = document.createElement('p')

        // b
        card
            .classList
            .add('card')
        h2.innerHTML = item.name
        one_more_flex
            .classList
            .add('one_more_flex')
        flex
            .classList
            .add('flex')
        currenncy_of_your_card
            .classList
            .add('currenncy_of_your_card')
        img_1
            .classList
            .add('img_1')
        img_1.src = '/public/Group 5.svg'
        img_2
            .classList
            .add('img_2')
        img_2.src = '/public/Vector.svg'
        money_of_card
            .classList
            .add('money_of_card')
        white
            .classList
            .add('white')
        its_money.id = ('its_money')
        if(item.balance.toString().length > 3){
            its_money.innerHTML = item.balance.toString().slice(0,3) + '...'
            its_money.onmouseenter = () => {
                its_money.innerHTML = item.balance
            }
            its_money.onmouseleave = () => {
                its_money.innerHTML = item.balance.toString().slice(0,3) + '...'
            }
        } else {
            its_money.innerHTML = item.balance
        }
        card_currency.id = 'card_currency'
        card_currency.innerHTML = item.currency
        grey
            .classList
            .add('grey')
        its_money_in_dollars.id = 'its_money_in_dollars'
        its_money_in_dollars.innerHTML = '30,000,000'
        tr_1_td_1_img.src = '/public/Frame.svg'
        changichg
            .classList
            .add('changichg')
        one
            .classList
            .add('one')
        one.innerHTML = `${item.currency} ${item.balance.toString().slice(0,3)}= 0,074 BTC`
        two
            .classList
            .add('two')
        two.innerHTML =  `${item.balance.toString().slice(0,3)} ${item.currency} = $6 542, 35`
        tr_2_td_1_img.src = '/public/Vector (1).svg'
        tr_3_td_1_img.src = '/public/Vector (1).svg'
        changichg_2
            .classList
            .add('changichg')
        changichg_3
            .classList
            .add('changichg')
        one_2
            .classList
            .add('one')
        one_2.innerHTML = `${item.currency} ${item.balance.toString().slice(0,3)}= 0,034 btc`
        one_3
            .classList
            .add('one')
        one_3.innerHTML = `${item.currency} ${item.balance.toString().slice(0,3)}= 0,075 btc`
        two_2
            .classList
            .add('two')
        two_2.innerHTML = `${item.balance.toString().slice(0,3)} ${item.currency} = $6 264, 35`
        two_3
            .classList
            .add('two')
        two_3.innerHTML = `${item.balance.toString().slice(0,3)} ${item.currency} = $6 642, 22`
        card.style.background = `linear-gradient(237.07deg, ${getRGB()} -8.06%, ${getRGB()} 96.63%)`
        // c
        changichg_3.append(one_3, two_3)
        tr_3_td_2.append(changichg_3)
        tr_3_td_1.append(tr_3_td_1_img)
        tr_3.append(tr_3_td_1, tr_3_td_2)
        changichg_2.append(one_2, two_2)
        tr_2_td_2.append(changichg_2)
        tr_2_td_1.append(tr_2_td_1_img)
        tr_2.append(tr_2_td_1, tr_2_td_2)
        changichg.append(one, two)
        tr_1_td_2.append(changichg)
        tr_1_td_1.append(tr_1_td_1_img)
        tr_1.append(tr_1_td_1, tr_1_td_2)
        table.append(tr_1, tr_2, tr_3,)
        grey.append(its_money_in_dollars)
        white.append(its_money, card_currency)
        money_of_card.append(white, grey)
        currenncy_of_your_card.append(img_1, img_2)
        flex.append(currenncy_of_your_card, money_of_card)
        one_more_flex.append(flex, table)
        card.append(h2, one_more_flex)
        place.append(card)
    }
}

export function reloadTransaction(arr, place) {

    place.innerHTML = ''

    for (const item of arr) {
        const transaction = document.createElement('div')
        const left = document.createElement('div')
        const time = document.createElement('h3')
        const date = document.createElement('h3')
        const symbol = document.createElement('div')
        const img = document.createElement('img')
        const img_2 = document.createElement('h3')
        const describtion = document.createElement('h3')
        const right = document.createElement('div')
        const amount = document.createElement('h3')
        const completed = document.createElement('button')
        // b
        transaction.classList.add('transaction')
        left.classList.add('left')
        right.className = 'right'
        time.className = 'time'
        time.innerHTML = item.created_at
        date.innerHTML = item.created_on
        symbol.classList.add('symbol')
        img.src = '/public/Vector.svg'
        img_2.src = '/public/Group 13.2.png'
        describtion.classList.add('describtion')
        describtion.innerHTML = item.description
        amount.className = 'amount'
        amount.innerHTML = item.total + item.wallet.currency
        completed.className = 'completed'
        completed.innerHTML = 'Completed'
        // c
        symbol.append(img)
        right.append(amount, completed)
        left.append(time, date, symbol, img_2, describtion)
        transaction.append(left, right)
        place.append(transaction)
    }
    }

export function reload_cards_for_market(place) {
    for (let i = 0; index < 15; i++) {
    //    const 
        
    }
}