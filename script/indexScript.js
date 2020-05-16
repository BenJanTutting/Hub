window.addEventListener('scroll', () => {
    const arrow = document.getElementById('scrollArrow')
    const scrolledHeight = window.scrollY
    const menuScrollHeight = document.getElementById('allContent').scrollTop

    if (Math.ceil(scrolledHeight) > menuScrollHeight) {
        arrow.classList.remove('shown')
        arrow.classList.add('hidden')
    } else {
        arrow.classList.remove('hidden')
        arrow.classList.add('shown')
    }
})
