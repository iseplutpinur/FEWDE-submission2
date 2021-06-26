import CONFIG from '../../globals/config'

const restoItemTemplate = (data) => `
    <div class="list-item">
        <img class="list-item-thumb" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + data.pictureId}" alt="${data.name}" title="${data.name}">
        <div class="city">${data.city}</div>
        <div class="list-item-content">
            <p class="list-item-rating">
                Rating :
                <span class="list-item-rating-value">${data.rating}</span>
            </p>
            <h1 class="list-item-title"><a href="#/detail/${data.id}">${data.name}</a></h1>
            <div class="list-item-desc">${data.description.slice(0, 150)}...</div>
        </div>
    </div>
`

const restoDetailTemplate = (data) => {
  // variable untuk detiil
  let listCategory = ''
  let listMakanan = ''
  let listMinuman = ''
  let listReview = ''

  data.restaurant.categories.forEach((data) => {
    listCategory += `
              <div class="tag">${data.name}</div>
          `
  })
  data.restaurant.menus.foods.forEach((data) => {
    listMakanan += `
              ${data.name},
          `
  })
  data.restaurant.menus.drinks.forEach((data) => {
    listMinuman += `
              ${data.name},
          `
  })
  data.restaurant.customerReviews.forEach((data) => {
    listReview += `
          <div class="review-card">
              <p><b>${data.name}</b> - ${data.date}</p>
              <p>${data.review}</p>
          </div>
          `
  })

  return `
    <div class="latest">
        <h1>Detail Restaurant</h1>
        <div class="detail-content" id="detail">
            <div class="list-item">
                <img class="list-item-thumb detail" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + data.restaurant.pictureId}" alt="${data.restaurant.name}" title="${data.restaurant.name}">
                <div class="city">${data.restaurant.city}</div>
                <div class="list-item-content" style="text-align:left;">
                    <p class="list-item-rating">
                        Rating :
                        <span class="list-item-rating-value">${data.restaurant.rating}</span>
                    </p>
                    <h2>${data.restaurant.name}</h2>
                    <p class="alamat">${data.restaurant.address}</p>
                    <div class="list_item_desc_detail">${data.restaurant.description}</div>
                    <br>
                    <h2>Restaurant Category</h2>
                    <p>${listCategory}</p>
                    <br>
                    <h3>Makanan</h3>
                    <p>${listMakanan}</p>
                    <br>
                    <h3>Minuman</h3>
                    <p>${listMinuman}</p>
                    <br>
                    <h2>Review</h2>
                    <p>Apa kata mereka yang sudah pernah berkunjung ke sini?</p>
                    <div>${listReview}</div>
                </div>
            </div>
        </div>
    </div>
        `
}

export {
  restoItemTemplate,
  restoDetailTemplate
}
