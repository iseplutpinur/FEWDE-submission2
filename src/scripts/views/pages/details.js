import sourceData from '../../globals/source'
import UrlParser from '../../routes/url-parser'
import { restoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    return `
      <section id="content">

      </section>
      <div id="likeButtonContainer"></div>
      `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await sourceData.detailResto(url.id)
    document.querySelector('#content').innerHTML = restoDetailTemplate(detail.restaurant)
    // console.log(detail.restaurant)
    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    likeButtonContainer.innerHTML = createLikeButtonTemplate()
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detail.restaurant.id,
        name: detail.restaurant.name,
        description: detail.restaurant.description,
        city: detail.restaurant.city,
        address: detail.restaurant.address,
        pictureId: detail.restaurant.pictureId,
        categories: detail.restaurant.categories,
        menus: detail.restaurant.menus,
        rating: detail.restaurant.rating,
        customerReviews: detail.restaurant.customerReviews
      }
    })
  }
}

export default Detail
