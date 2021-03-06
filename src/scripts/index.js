import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './sw-register'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#nav_drawer'),
  content: document.querySelector('main'),
  hero: document.querySelector('#header-hero')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
