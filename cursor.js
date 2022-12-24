function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
})

window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX
    mouseY = e.clientY
})

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small')
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small')
        }
    })
})