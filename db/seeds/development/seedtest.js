const faker = require('faker');

const createFakeData = () => ({
  price: faker.random.number({
    'min': 70,
    'max': 150
  }),
  stars: faker.random.number({
    'min': 1,
    'max': 5
  }),
  reviews: faker.random.number({
    'min': 10,
    'max': 300
  }),
  cleaningFee: faker.random.number({
    'min': 30,
    'max': 70
  }),
  serviceFee: faker.random.number({
    'min': 50,
    'max': 100
  }),
  guests: faker.random.number({
    'min': 1,
    'max': 4
  }),
  minNights: faker.random.number({
    'min': 1,
    'max': 3
  })
});

exports.seed = async function(knex, Promise) {
  const fakeBookings = [
    {
      checkin: '02-14-2019',
      checkout: '02-18-2019',
      numGuests: 2,
      total: 500,
      listing_id: 1
    },
    {
      checkin: '02-20-2019',
      checkout: '02-27-2019',
      numGuests: 3,
      total: 888,
      listing_id: 1
    },
    {
      checkin: '03-01-2019',
      checkout: '03-05-2019',
      numGuests: 2,
      total: 358,
      listing_id: 2
    }
  ];
  const fakeData = [];
  const desiredFakeData = 100;
  for (let i = 0; i < desiredFakeData; i++) {
    fakeData.push(createFakeData());
  }
  await knex('listings')
    .insert(fakeData);
  await knex('bookings')
    .insert(fakeBookings);
};

