import sourceData from '../../globals/source'

const Detail = {
  async render () {
    return `
        <h2>Detail Page</h2>
      `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const detail = await sourceData.detailResto()
  }
}

export default Detail
