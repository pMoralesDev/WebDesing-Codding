const sideMenu = document.querySelector('aside'),
menuBtn = document.getElementById('menu-btn'),
closeBtn = document.getElementById('close-btn')

const darkMode = document.querySelector('.dark-mode')

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables')
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active')
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active')
})

Orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productID}</td>
        <td>${order.paymentStatus}</td>
        <td class='${order.status === "Declined" ? "danger" : order.status === "Unactive" ? "warning" : "primary"}'>${order.status}</td>
        <td class="primary">Details</td>
    `
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
})