const express = require('express')
const router = express.Router()
const axios = require('axios')
axios.defaults.baseURL = 'https://maps.googleapis.com'
const querystring = require('querystring')
const key = process.env.GOOGLE_PLACES_API_KEY

router.get('/:placeid', (req, res, next) => {
  const queryStr = querystring.stringify({
    key: key,
    placeid: req.params['placeid']
  })

  axios.get(`/maps/api/place/details/json?${queryStr}`)
  .then((response) => {
    switch (response.data.status) {
      case 'OK':
        let place = {
          raw: response.data,
          parsed: parsePlaceData(response.data)
        }
        res.send(place)
        break
      default:
        res.status(400)
        res.send(response.data.status)
    }
  })
  .catch((error) => {
    res.status(500)
    res.send('Internal Error')
  })
})

const GOOGLE_TYPE_REFERENCE = {
  'street_number': 'street_number',
  'route': 'street_name',
  'locality': 'city',
  'administrative_area_level_1': 'state',
  'postal_code': 'zipcode'
}

const parsePlaceData = (response) => {
  let result = {}

  response.result.address_components.forEach((address_component) => {
    address_component.types.forEach((type) => {
      let reference = GOOGLE_TYPE_REFERENCE[type]
      if (reference != null) {
        result[reference] = address_component.long_name
      }
    })
  });

  return result
}

module.exports = router
