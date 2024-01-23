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