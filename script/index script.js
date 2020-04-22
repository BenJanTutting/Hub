window.addEventListener('scroll', () =>
{
    let arrow = document.getElementById('scrollArrow');
    let scrolledHeight = window.scrollY;
    let menuScrollHeight = document.getElementById('allContent').scrollTop;

    if(Math.ceil(scrolledHeight) > menuScrollHeight)
    {
        arrow.classList.remove('shown');
        arrow.classList.add('hidden');
    }
    else
    {
        arrow.classList.remove('hidden');
        arrow.classList.add('shown');
    }
});