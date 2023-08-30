window.onload = function() {
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
        switchTheme()
    }
}

function switchTheme() {
    document.querySelector('.body').classList.toggle('dark')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(changedToDark) {
    switchTheme()
})

document.querySelector('.theme-switcher').addEventListener('click', function() {
    switchTheme()
})