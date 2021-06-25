import sourceData from '../../globals/source'

const Home = {
  async render () {
    return `
          <h2>Home Page</h2>
        `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const list = await sourceData.listResto()
  }
}

export default Home
