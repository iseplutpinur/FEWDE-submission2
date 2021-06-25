import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor ({ button, drawer, content, hero }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._hero = hero

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this.setHero(url === '/' || url === '/home')

    this._content.innerHTML = await page.render()
    await page.afterRender()
  }

  setHero (set) {
    if (set) {
      this._hero.classList.remove('d-hide')
    } else {
      this._hero.classList.add('d-hide')
    }
  }
};

export default App
