import sourceData from '../../globals/source'
import UrlParser from '../../routes/url-parser'
import { restoDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <section id="content">

      </section>
      `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await sourceData.detailResto(url.id)
    document.querySelector('#content').innerHTML = restoDetailTemplate(detail)
  }
}

export default Detail
