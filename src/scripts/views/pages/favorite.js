import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import { restoItemTemplate } from '../templates/template-creator'

const favorite = {
  async render () {
    return `
      <section id="content">
      <div class="latest">
          <h1>Favorite Restaurant</h1>
          <div class="list" id="mainContent"></div>
      </div>
    </section>
        `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const lists = await FavoriteRestaurantIdb.getAllRestaurants()
    const listContainer = document.querySelector('#mainContent')
    lists.forEach((movie) => {
      listContainer.innerHTML += restoItemTemplate(movie)
    })
  }
}

export default favorite
