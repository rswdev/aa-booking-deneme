const { passengerDatabase, driverDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

//const eren = passengerDatabase.findByName('Eren MERCAN')
// const ahmet = driverDatabase.findBy('name', 'Camdibi')


// eren.book(ahmet, 'Kuşadası', 'İzmir')
//passengerDatabase.update(eren)

//printBookingHistory(eren)

// console.log(passengerDatabase.findBy('name', 'Eren MERCAN'))
// console.log(passengerDatabase.findBy('location', 'Eren MERCAN'))




















// const colors = require('colors');
// const Passenger = require('./models/passenger')
// const Driver = require('./models/driver')
// const { passengerDatabase, driverDatabase } = require('./database')

// // const eren = Passenger.create({name: 'Eren MERCAN', location: 'Bayrakli'})
// // const ozlem = Passenger.create({name : 'Ozlem GERGUS', location:'Camdibi'})
// const ahmet = Driver.create({name : 'Ahmet Tyrell', location: 'Alsancak'})


// // eren.book(ahmet,'Bayrakli','Forum Bornova')
// // eren.book(ahmet,'Forum Bornova','Karsıyaka')
// // eren.book(ahmet,'Karsıyaka','Bostanlı')
// // ozlem.book(ahmet,'Bayrakli','Forum Bornova')


// function printBooking(booking){
//     console.log(`${colors.blue(booking.passenger.name)}(${colors.bgWhite.blue(booking.passenger.location)}) booked ${colors.white(booking.driver.name)}. And the driver is coming from ${colors.yellow(booking.driver.location)} to travel ${colors.bgWhite.black(booking.origin)} - ${colors.bgWhite.black(booking.destination)} `)
// }

// function printBookingHistory(passenger) {
//     if(passenger.bookings.length == 0)
//     return console.log(`${colors.blue(passenger.name)} has no bookings.`)

//     passenger.bookings.forEach(printBooking)
// }

// //-- Passenger.json ve driver.json'u oluşturma ve verileri kaydetme.

// // passengerDatabase.save([eren, ozlem])  // passenger.json'ı oluştur ve kaydet.
// // driverDatabase.save([ahmet])           // drivers.json'u oluştur ve kaydet. 
// //(passenger.forEach(printBookingHistory)

// // const burhan = new Passenger('Burhan Altıntop','Tokat/Erbag')


// // db.insert('passengers', burhan)
// // db.remove('passengers', 2)   
// const eren = passengerDatabase.findByName('Eren MERCAN')

// eren.book(ahmet, 'Kuşadası', 'İzmir')
// passengerDatabase.update(eren)
// printBookingHistory(eren)





