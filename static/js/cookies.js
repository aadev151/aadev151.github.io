function startCookieFall() {

    const cookieImgSize = 133  // cookieImgSizesAvailable[Math.floor(Math.random() * cookieImgSizesAvailable.length)]
    const cookieSize = cookieImgSize - 50

    const cookieImgSizesAvailable = [133, 50, 245, 35]

    const cookiesInRow = parseInt((window.innerWidth + cookieSize - 1) / cookieSize)
    const cookiesInCol = parseInt((window.innerHeight + cookieSize - 1) / cookieSize)

    var cookiesGrid = []
    for (var _ = 0; _ < cookiesInCol; _++) {
        cookiesGrid.push(Array(cookiesInRow).fill(0))
    }
    var cookieCount = 0

    const cookieInterval = setInterval(function() {
        var freeSlots = []

        for (var k = 0; k < cookiesInCol; k++) { 
            for (var m = 0; m < cookiesInRow; m++) {
                if (cookiesGrid[k][m] === 0) {
                    freeSlots.push([k, m])
                }
            }
        }

        if (freeSlots.length === 0) { 
            return 
        }

        const newSlot = freeSlots[Math.floor(Math.random() * freeSlots.length)]
        const i = newSlot[0]
        const j = newSlot[1]

        cookieCount++
    
        cookiesGrid[i][j] = 1
        const left = -30 + j * cookieSize
        const top = -30 + i * cookieSize

        const cookieElement = document.createElement('img')
        cookieElement.src = 'static/img/cookie.png'
        cookieElement.classList.add('cookie')
        cookieElement.width = cookieImgSize
        cookieElement.height = cookieImgSize
        cookieElement.style.top = top.toString() + 'px'
        cookieElement.style.left = left.toString() + 'px'

        document.body.appendChild(cookieElement)


        if (cookieCount === cookiesGrid.length * cookiesGrid[0].length) {
            const cookieMessage = document.createElement('div')
            cookieMessage.classList.add('cookie-message')
            cookieMessage.innerHTML = `
            <h1>Still less than an average website uses</h1>
            <button onclick="location.reload()">Reload the page</button>
            <p>Cookie image attribution: <a href="https://icons8.com/icon/Ic8ZD97exiAD/cookie" target="_blank">icons8.com</a></p>
            `
            document.body.appendChild(cookieMessage)
            clearInterval(cookieInterval)
            return
        }

    }, 20)

}


const cookieBanner = document.querySelector('.cookie-banner')

document.querySelector('#okayCookiesBtn').addEventListener('click', function() {
    cookieBanner.style.display = 'none'
})

document.querySelector('#addCookiesBtn').addEventListener('click', function() {
    cookieBanner.style.display = 'none'
    startCookieFall()    
})
