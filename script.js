const hamburger = document.getElementById('nav-btn')
const mobileMenu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
  console.log(typeof window.innerWidth)
  if (!hamburger.classList.contains('open')) {
    hamburger.classList.add('open')
    mobileMenu.classList.add('flex')
    mobileMenu.classList.remove('hidden')
  } else {
    hamburger.classList.remove('open')
    mobileMenu.classList.add('hidden')
    mobileMenu.classList.remove('flex')
  }
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 767 && hamburger.classList.contains('open')) {
    hamburger.classList.remove('open')
    mobileMenu.classList.add('hidden')
    mobileMenu.classList.remove('flex')
  }
})
