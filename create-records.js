const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
// const passengerDatabase = require('./database/passenger-database')
// const driverDatabase = require('./database/driver-database')
const { passengerDatabase, driverDatabase } = require('./database')

const printBookingHistory = require('./lib/print-booking-history')


const eren = Passenger.create({name: 'Eren MERCAN', location: 'Bayrakli'})
const ozlem = Passenger.create({name : 'Ozlem GERGUS', location:'Camdibi'})
const ahmet = Driver.create({name : 'Ahmet Tyrell', location: 'Alsancak'})


eren.book(ahmet,'Bayrakli', 'Forum Bornova')
eren.book(ahmet,'Forum Bornova', 'Karsiyaka')
eren.book(ahmet,'Karsıyaka', 'Bostanlı')
ozlem.book(ahmet,'Bayrakli', 'Forum Bornova')
// burhan.book(ahmet, 'Tokat', 'Tokat/Erbag')



passengerDatabase.save([eren, ozlem])  // passenger.json'ı oluştur ve kaydet.
driverDatabase.save([ahmet])           // drivers.json'u oluştur ve kaydet. 


// // const burhan = Passenger.create({name : 'Burhan Altıntop', location:'Tokat/Erbag'})

// // passengerDatabase.insert(burhan)

const passengers = passengerDatabase.load()

passengers.forEach(printBookingHistory)

