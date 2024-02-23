const buttonTheme = document.getElementById('icons')
const root = document.documentElement

buttonTheme.addEventListener('click', () => {
  root.classList.toggle('dark')

  toggleImages()
})

function toggleImages() {
  const logo = document.getElementById('logo-app')
  const star = document.getElementById('star-favorite')

  if (root.classList.contains('dark')){
    logo.src = './assets/logo-white.png'
    star.src = './assets/star-light-border-black.svg'
  }
  else {
    logo.src = './assets/logo-black.png'
    star.src = './assets/star-light-border-white.svg'
  }
}