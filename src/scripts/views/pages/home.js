import sourceData from '../../globals/source'
import { restoItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <section id="content">
      <div class="latest">
          <h1>Explore Restaurant</h1>
          <div class="list" id="mainContent"></div>
      </div>
    </section>
        `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const lists = await sourceData.listResto()
    const listContainer = document.querySelector('#mainContent')
    lists.restaurants.forEach((movie) => {
      listContainer.innerHTML += restoItemTemplate(movie)
    })
  }
}

export default Home
