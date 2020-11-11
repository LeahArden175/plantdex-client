import config from '../config'

const PlantApiService = {
  getPlants() {
    return fetch(`${config.API_ENDPOINT}/api/plants`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getplant(plantId) {
    return fetch(`${config.API_ENDPOINT}/api/plants/${plantId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default PlantApiService