const colors = require('colors')


function printBooking(booking){
  console.log(`${colors.blue(booking.passenger.name)}(${colors.bgWhite.blue(booking.passenger.location)}) booked ${colors.white(booking.driver.name)}. And the driver is coming from ${colors.yellow(booking.driver.location)} to travel ${colors.bgWhite.black(booking.origin)} - ${colors.bgWhite.black(booking.destination)}`)
}

function printBookingHistory(passenger) {
  if (passenger.bookings.length == 0)
    return console.log(`${colors.blue(passenger.name)} no bookings found.`)

  passenger.bookings.forEach(printBooking)
}

module.exports = printBookingHistory






