window.onload = function() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        switchTheme()
    }
}

function switchTheme(isDark = null) {
    var doChange = false

    if (isDark != null) {
        if (!isDark && document.querySelector('.body').classList.contains('dark')) 
            doChange = true
        else if (isDark && !document.querySelector('.body').classList.contains('dark')) 
            doChange = true
    } else {
        doChange = true
    }

    if (doChange)
        document.querySelector('.body').classList.toggle('dark')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(changedToDark) {
    switchTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
})

document.querySelector('.theme-switcher').addEventListener('click', function() {
    switchTheme()
})
