const { Router } = require('express')

const router = Router()

// Skateparks
const skateparks = {
  'Ajax': {
    'name': 'Ajax',
    'address': 'ontario',
    'address_url': '',
    'city': 'Ajax',
    'photo_url': 'https://placehold.it/600x400',
    'thumbnail_url': 'https://placehold.it/300x300'
  },
  'Aurora': {
    'name': 'Aurora',
    'address': 'ontario',
    'city': 'Aurora',
    'thumbnail_url': 'https://placehold.it/300x300'
  },
  'Bala': {
    'name': 'Bala',
    'address': 'ontario',
    'city': 'Bala',
    'thumbnail_url': 'https://placehold.it/300x300'
  },
  'Bancroft': {
    'name': 'Bancroft',
    'address': 'ontario',
    'city': 'Bancroft'
  },
  'Belleville': {
    'name': 'Belleville',
    'address': 'ontario',
    'address_url': '',
    'city': 'Belleville',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Blind-River': {
    'name': 'Blind-River',
    'address': 'ontario',
    'city': 'Blind River'
  },
  'Bolton': {
    'name': 'Bolton',
    'address': 'ontario',
    'city': 'Bolton'
  },
  'Bowmanville': {
    'name': 'Bowmanville',
    'address': 'ontario',
    'city': 'Bowmanville'
  },
  'Bracebridge': {
    'name': 'Bracebridge',
    'address': 'ontario',
    'address_url': '',
    'city': 'Bracebridge',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Brampton': {
    'name': 'Brampton',
    'address': 'ontario',
    'city': 'Brampton'
  },
  'Brantford': {
    'name': 'Brantford',
    'address': 'ontario',
    'city': 'Brantford'
  },
  'Burlington': {
    'name': 'Burlington',
    'address': 'ontario',
    'city': 'Burlington'
  },
  'Bolton': {
    'name': 'Bolton',
    'address': 'ontario',
    'city': 'Bolton'
  },
  'Bowmanville': {
    'name': 'Bowmanville',
    'address': 'ontario',
    'city': 'Bowmanville'
  },
  'Bracebridge': {
    'name': 'Bracebridge',
    'address': 'ontario',
    'address_url': '',
    'city': 'Bracebridge',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Brampton': {
    'name': 'Brampton',
    'address': 'ontario',
    'city': 'Brampton'
  },
  'Brantford': {
    'name': 'Brantford',
    'address': 'ontario',
    'city': 'Brantford'
  },
  'Campbellford': {
    'name': 'Campbellford',
    'address': 'ontario',
    'city': 'Campbellford'
  },
  'Cannington': {
    'name': 'Cannington',
    'address': 'ontario',
    'city': 'Cannington'
  },
  'Clarkson': {
    'name': 'Clarkson',
    'address': 'ontario',
    'city': 'Clarkson'
  },
  'Courtice': {
    'name': 'Courtice',
    'address': 'ontario',
    'address_url': '',
    'city': 'Courtice',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Elgin-Mills': {
    'name': 'Elgin-Mills',
    'address': 'ontario',
    'city': 'Elgin Mills'
  },
  'Etobicoke': {
    'name': 'Etobicoke',
    'address': 'ontario',
    'city': 'Etobicoke'
  },
  'Fort-Erie': {
    'name': 'Fort-Erie',
    'address': 'ontario',
    'city': 'Fort Erie'
  },
  'Gananoque': {
    'name': 'Gananoque',
    'address': 'ontario',
    'city': 'Gananoque'
  },
  'Gravenhurst': {
    'name': 'Gravenhurst',
    'address': 'ontario',
    'city': 'Gravenhurst'
  },
  'Guelph': {
    'name': 'Guelph',
    'address': 'ontario',
    'city': 'Guelph'
  },
  'Hamilton': {
    'name': 'Hamilton',
    'address': 'ontario',
    'address_url': '',
    'city': 'Hamilton',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Huntsville': {
    'name': 'Huntsville',
    'address': 'ontario',
    'city': 'Huntsville'
  },
  'Keswick': {
    'name': 'Keswick',
    'address': 'ontario',
    'city': 'Keswick'
  },
  'King-City': {
    'name': 'King-City',
    'address': 'ontario',
    'city': 'Vaughn'
  },
  'Kitchener': {
    'name': 'Kitchener',
    'address': 'ontario',
    'city': 'Kitchener'
  },
  'London-Kiwanis': {
    'name': 'London-Kiwanis',
    'address': 'ontario',
    'city': 'London Kiwanis'
  },
  'London-Medway': {
    'name': 'London-Medway',
    'address': 'ontario',
    'address_url': '',
    'city': 'London Medway',
    'photo_url': 'https://placehold.it/600x400'
  },
  'London-Woolsley-Barracks': {
    'name': 'London-Woolsley-Barracks',
    'address': 'ontario',
    'city': 'London Woolsley Barracks'
  },
  'Madoc': {
    'name': 'Madoc',
    'address': 'ontario',
    'city': 'Madoc'
  },
  'Milton': {
    'name': 'Milton',
    'address': 'ontario',
    'city': 'Milton'
  },
  'Milton-Sportscentre': {
    'name': 'Milton-Sportscentre',
    'address': 'ontario',
    'city': 'Milton'
  },
  'Minnow-Lake': {
    'name': 'Minnow-Lake',
    'address': 'ontario',
    'city': 'Minnow Lake'
  },
  'Mississauga': {
    'name': 'Mississauga',
    'address': 'ontario',
    'city': 'Mississauga'
  },
  'Mississauga-Port-Credit': {
    'name': 'Mississauga-Port-Credit',
    'address': 'ontario',
    'city': 'Mississauga Port Credit'
  },
  'Northbrook': {
    'name': 'Northbrook',
    'address': 'ontario',
    'city': 'Northbrook'
  },
  'Orillia': {
    'name': 'Orillia',
    'address': 'ontario',
    'address_url': '',
    'city': 'Orillia',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Paris': {
    'name': 'Paris',
    'address': 'ontario',
    'city': 'Paris'
  },
  'Pembroke': {
    'name': 'Pembroke',
    'address': 'ontario',
    'city': 'Pembroke'
  },
  'Peterborough': {
    'name': 'Peterborough',
    'address': 'ontario',
    'address_url': '',
    'city': 'Peterborough',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Picton': {
    'name': 'Picton',
    'address': 'ontario',
    'city': 'Picton'
  },
  'Port-Dover': {
    'name': 'Port-Dover',
    'address': 'ontario',
    'city': 'Port Dover'
  },
  'Saugeen-Shores': {
    'name': 'Saugeen-Shores',
    'address': 'ontario',
    'city': 'Saugeen Shores'
  },
  'Shelburne': {
    'name': 'Shelburne',
    'address': 'ontario',
    'city': 'Shelburne'
  },
  'Simcoe': {
    'name': 'Simcoe',
    'address': 'ontario',
    'city': 'Simcoe'
  },
  'St.Thomas': {
    'name': 'St.Thomas',
    'address': 'ontario',
    'address_url': '',
    'city': 'St.Thomas',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Stouffville': {
    'name': 'Stouffville',
    'address': 'ontario',
    'city': 'Stouffville'
  },
  'Tillsonburg': {
    'name': 'Tillsonburg',
    'address': 'ontario',
    'city': 'Tillsonburg'
  },
    'Shelburne': {
    'name': 'Shelburne',
    'address': 'ontario',
    'city': 'Shelburne'
  },
  'Simcoe': {
    'name': 'Simcoe',
    'address': 'ontario',
    'city': 'Simcoe'
  },
  'St.Thomas': {
    'name': 'St.Thomas',
    'address': 'ontario',
    'address_url': '',
    'city': 'St.Thomas',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Stouffville': {
    'name': 'Stouffville',
    'address': 'ontario',
    'city': 'Stouffville'
  },
  'Tillsonburg': {
    'name': 'Tillsonburg',
    'address': 'ontario',
    'city': 'Tillsonburg'
  },
  'Toronto-Ashbridges': {
    'name': 'Toronto-Ashbridges',
    'address': 'ontario',
    'address_url': '',
    'city': 'Toronto Ashbridges',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Cjs': {
    'name': 'Cjs',
    'address': 'ontario',
    'city': 'Toronto'
  },
  'Cummer': {
    'name': 'Cummer',
    'address': 'ontario',
    'city': 'Toronto'
  },
  'Dufferin-Grove': {
    'name': 'Dufferin-Grove',
    'address': 'ontario',
    'city': 'Toronto'
  },
  'Dunbat': {
    'name': 'Dunbat',
    'address': 'ontario',
    'address_url': '',
    'city': 'Toronto',
    'photo_url': 'https://placehold.it/600x400'
  },
  'East-York': {
    'name': 'East-York',
    'address': 'ontario',
    'city': 'Toronto'
  },
  'Lions': {
    'name': 'Lions',
    'address': 'ontario',
    'city': 'Lions'
  },
  'Parkdale': {
    'name': 'Parkdale',
    'address': 'ontario',
    'city': 'Toronto'
  },
  'Underpass': {
    'name': 'Underpass',
    'address': 'ontario',
    'address_url': '',
    'city': 'Toronto',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Wallace-and-Emerson': {
    'name': 'Wallace-and-Emerson',
    'address': 'ontario',
    'city': 'Toronto'
  },
  'Trenton': {
    'name': 'Trenton',
    'address': 'ontario',
    'city': 'Trenton'
  },
  'Uxbridge': {
    'name': 'Uxbridge',
    'address': 'ontario',
    'city': 'Uxbridge'
  },
  'Vaughn-Hillside': {
    'name': 'Vaughn-Hillside',
    'address': 'ontario',
    'city': 'Vaughn'
  },
  'Jack-Pine': {
    'name': 'Jack-Pine',
    'address': 'ontario',
    'city': 'Jack-Pine'
  },
  'Twelve-Oaks': {
    'name': 'Twelve-Oaks',
    'address': 'ontario',
    'address_url': '',
    'city': 'Vaughn',
    'photo_url': 'https://placehold.it/600x400'
  },
  'Walkerton': {
    'name': 'Walkerton',
    'address': 'ontario',
    'city': 'Walkerton'
  },
  'Warkworth': {
    'name': 'Warkworth',
    'address': 'ontario',
    'city': 'Warkworth'
  }
}

/* GET skateparks listing. */
router.get('/skateparks', function (req, res, next) {
  res.json(skateparks)
})

/* GET skatepark location  */
router.get('/skateparks/:id', function (req, res, next) {
  let id = req.params.id
  if (id in skateparks) {
    res.json(skateparks[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
