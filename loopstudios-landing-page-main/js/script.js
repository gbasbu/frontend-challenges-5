const nav = document.querySelector('.nav')

document.querySelector('.hamburger').addEventListener('click', function() {
    nav.classList.add('mobile-nav')
    document.querySelector('.nav-links').classList.add('mobile-links')
    document.getElementById('body').classList.add('overflow')
    document.querySelector('.hamburger').style.display = 'none'
    document.querySelector('.close').style.display = 'block'
})
document.querySelector('.close').addEventListener('click', function() {
    nav.classList.remove('mobile-nav')
    document.querySelector('.nav-links').classList.remove('mobile-links')
    document.getElementById('body').classList.remove('overflow')
    document.querySelector('.close').style.display = 'none'
    document.querySelector('.hamburger').style.display = 'block'
})

