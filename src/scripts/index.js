import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#nav_drawer'),
  content: document.querySelector('#content'),
  hero: document.querySelector('#header-hero')
})
